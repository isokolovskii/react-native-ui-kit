import { useState, type FC } from 'react'
import { TouchableOpacity, type ViewProps, type ViewStyle } from 'react-native'
import Animated, {
  interpolateColor,
  runOnJS,
  type SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface SelectButtonItemProps
  extends Pick<ViewProps, 'onLayout' | 'testID'> {
  /** Индекс кнопки */
  readonly index: number

  /** Обработчик нажатия на кнопку */
  readonly onPress: () => void

  /**
   * Анимированное значение 0...n-1, где n - это количество кнопок.
   * Кнопка считается выбранной, если значение position равно индексу кнопки.
   */
  readonly position: SharedValue<number>

  /** true - если кнопка недоступна для нажатия */
  readonly disabled?: boolean

  /** Текст на кнопке */
  readonly label?: string

  /**
   * Выбор размера элемента
   * @default 'base'
   */
  readonly size?: 'small' | 'base' | 'large' | 'xlarge'

  /**
   * Показать или скрыть иконку внутри компонента
   * @default true
   */
  readonly showIcon?: boolean

  /** SVG-иконка */
  readonly Icon?: SvgSource
}

/**
 * Дочерний элемент компонента SelectButton. Не используется отдельно от SelectButton.
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=481-4393
 */
export const SelectButtonItem: FC<SelectButtonItemProps> = ({
  index,
  position,
  onPress,
  disabled,
  label,
  onLayout,
  size = 'base',
  showIcon = true,
  Icon,
  testID = 'SelectButtonItem_TouchableOpacity',
}) => {
  const styles = useStyles()

  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        position.value,
        [index - 1, index, index + 1],
        [
          styles.textColor.color,
          styles.checkedTextColor.color,
          styles.textColor.color,
        ]
      ),
    }
  })

  const [isSelected, setIsSelected] = useState(false)

  useAnimatedReaction(
    () => position.value,
    (value, prevValue) => {
      if (value !== prevValue) {
        runOnJS(setIsSelected)(value === index)
      }
    }
  )

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        styles[size],
        disabled && styles.disabledContainer,
      ]}
      testID={testID}
      onLayout={onLayout}
      onPress={onPress}
    >
      {Icon && showIcon ? (
        <SvgUniversal
          height={styles[`icon${size}`].height}
          source={Icon}
          style={
            [
              styles.textColor,
              isSelected && styles.checkedTextColor,
              disabled && styles.disabledTextColor,
            ] as ViewStyle[]
          }
          testID='SelectButtonItem_Icon'
          width={styles[`icon${size}`].width}
        />
      ) : null}
      <Animated.Text
        numberOfLines={1}
        style={[
          styles.label,
          styles[`label${size}`],
          styles.textColor,
          disabled ? styles.disabledTextColor : animatedColorStyle,
        ]}
        testID='SelectButtonItem_Text'
      >
        {label}
      </Animated.Text>
    </TouchableOpacity>
  )
}

const useStyles = makeStyles(
  ({ theme, typography, border, spacing, fonts }) => ({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.General.inlineSpacing,
      borderWidth: border.Width.border,
      borderColor: 'transparent',
    },
    small: { height: theme.Button.Common.buttonHeightSM },
    base: { height: theme.Button.Common.buttonHeight },
    large: {
      height: theme.Button.Common.buttonHeightLG,
      gap: spacing.Gap['gap-3'],
    },
    xlarge: {
      height: theme.Button.Common.buttonHeightXL,
      gap: spacing.Gap['gap-3'],
    },
    disabledContainer: {
      borderRadius: theme.Form.SelectButton.selectButtonBorderRadius,
      borderWidth: 1,
      borderColor: theme.Button.Disabled.disabledButtonBorderColor,
    },
    iconsmall: {
      width: typography.Size['text-base'],
      height: typography.Size['text-base'],
    },
    iconbase: {
      width: typography.Size['text-xl'],
      height: typography.Size['text-xl'],
    },
    iconlarge: {
      width: typography.Size['text-2xl'],
      height: typography.Size['text-2xl'],
    },
    iconxlarge: { width: 28, height: 28 },
    label: { flexShrink: 1, fontWeight: 600, fontFamily: fonts.primary },
    labelsmall: { fontSize: typography.Size['text-sm'] },
    labelbase: { fontSize: typography.Size['text-base'] },
    labellarge: { fontSize: typography.Size['text-xl'] },
    labelxlarge: { fontSize: typography.Size['text-2xl'] },
    textColor: { color: theme.Form.SelectButton.selectButtonTextColor },
    checkedTextColor: {
      color: theme.Form.SelectButton.selectButtonIconActiveColor,
    },
    disabledTextColor: {
      color: theme.Button.Disabled.disabledButtonBorderColor,
    },
  })
)
