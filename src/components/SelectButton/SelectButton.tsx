import { useRef, useState, type FC } from 'react'
import {
  type AccessibilityProps,
  type LayoutChangeEvent,
  type LayoutRectangle,
  type StyleProp,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native'
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  type SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { makeStyles } from '../../utils/makeStyles'

import {
  SelectButtonItem,
  type SelectButtonItemProps,
} from './SelectButtonItem'

const DEFAULT_ANIMATION_DURATION = 200 // ms

export interface SelectButtonProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /** Массив кнопок. Должен содержать как минимум 2 кнопки. */
  readonly buttons: Array<
    Pick<SelectButtonItemProps, 'label' | 'showIcon' | 'Icon'> & { key: string }
  >

  /** true - если кнопки недоступны для нажатия */
  readonly disabled?: boolean

  /** Индекс выбранной кнопки при первом рендере */
  readonly initialIndex?: number

  /** Вызывается при нажатии на кнопку */
  readonly onPress?: (index: number) => void

  /**
   * Анимированное значение 0...n-1, где n - это количество кнопок.
   * Используется для контроля элемента извне. Если передано, то компонент становится управляемым.
   */
  readonly position?: SharedValue<number>

  /**
   * Выбор размера элемента
   * @default 'base'
   */
  readonly size?: 'small' | 'base' | 'large' | 'xlarge'

  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>
}

/**
 * Используется для маркировки элементов интерфейса
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-4921
 */
export const SelectButton: FC<SelectButtonProps> = ({
  buttons,
  disabled,
  initialIndex: initialIndexProp,
  onPress: onPressProp,
  size,
  style,
  testID,
  position: positionProp,
  ...rest
}) => {
  const styles = useStyles()
  const buttonsLayoutListRef = useRef<LayoutRectangle[]>([])
  const buttonsLayoutList = useSharedValue<LayoutRectangle[]>([])
  const [frameKey, setFrameKey] = useState(Date.now())

  const onButtonLayout = (index: number, event: LayoutChangeEvent) => {
    buttonsLayoutListRef.current[index] = event.nativeEvent.layout

    if (buttonsLayoutListRef.current.length === buttons.length) {
      buttonsLayoutList.value = [...buttonsLayoutListRef.current]
    }
  }

  useAnimatedReaction(
    () => buttonsLayoutList.value,
    (layoutList, previous) => {
      if (layoutList !== previous) {
        runOnJS(setFrameKey)(Date.now())
      }
    }
  )

  const positionInner = useSharedValue(
    initialIndexProp && initialIndexProp < buttons.length ? initialIndexProp : 0
  )
  const position = positionProp || positionInner
  const animationInputRange = buttons.map((_, index) => index)

  const framePositionStyle = useAnimatedStyle(() => {
    const left = interpolate(
      position.value,
      animationInputRange,
      animationInputRange.map((index) => buttonsLayoutList.value[index]?.x ?? 0)
    )
    const width = interpolate(
      position.value,
      animationInputRange,
      animationInputRange.map(
        (index) => buttonsLayoutList.value[index]?.width ?? 0
      )
    )

    return { left, width }
  })

  const onPress = (index: number) => {
    if (!positionProp) {
      positionInner.value = withTiming(index, {
        duration: DEFAULT_ANIMATION_DURATION,
        easing: Easing.linear,
      })
    }

    onPressProp?.(index)
  }

  return (
    <View
      collapsable={false}
      style={[styles.container, style]}
      testID={testID}
      {...rest}
    >
      {buttons.map(({ label, Icon, key, showIcon }, index) => (
        <SelectButtonItem
          Icon={Icon}
          disabled={disabled}
          index={index}
          key={key}
          label={label}
          position={position}
          showIcon={showIcon}
          size={size}
          testID={`SelectButton_SelectButtonItem_${index}`}
          onLayout={(event) => onButtonLayout(index, event)}
          onPress={() => onPress(index)}
        />
      ))}

      {!disabled && (
        <Animated.View
          key={frameKey}
          style={[styles.frame, framePositionStyle]}
          testID='SelectButton_AnimatedFrame'
        />
      )}
    </View>
  )
}

const useStyles = makeStyles(({ theme }) => ({
  container: {
    flexDirection: 'row',
    padding: theme.Form.SelectButton.selectButtonGroupPadding,
    gap: theme.Form.SelectButton.selectButtonGroupPadding,
    borderRadius: theme.General.borderRadiusXL,
    backgroundColor: theme.Form.SelectButton.selectButtonGroupBg,
  },
  frame: {
    position: 'absolute',
    top: theme.Form.SelectButton.selectButtonGroupPadding,
    bottom: theme.Form.SelectButton.selectButtonGroupPadding,
    left: theme.Form.SelectButton.selectButtonGroupPadding,
    borderRadius: theme.Form.SelectButton.selectButtonBorderRadius,
    backgroundColor: theme.Form.SelectButton.selectButtonActiveBg,
    zIndex: -1,
  },
  textColor: { color: theme.Form.SelectButton.selectButtonTextColor },
  checkedTextColor: {
    color: theme.Form.SelectButton.selectButtonIconActiveColor,
  },
}))
