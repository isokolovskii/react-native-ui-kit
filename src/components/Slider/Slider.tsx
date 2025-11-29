import { useState, type FC } from 'react'
import {
  type AccessibilityProps,
  type LayoutChangeEvent,
  View,
  type ViewProps,
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  runOnJS,
} from 'react-native-reanimated'

import { makeStyles } from '../../utils/makeStyles'

export interface SliderProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /**
   * Управление доступностью компонента
   * @default false
   */
  readonly disabled?: boolean
  /**
   * Признак наличия диапазона выбираемых значений
   * @default false
   */
  readonly range?: boolean
  /**
   * Начальное значение/позиция стартового ползунка
   * @default 0
   */
  readonly minPointerValueInit: number
  /**
   * Конечное значение/позиция конечного ползунка
   * @default 100
   */
  readonly maxPointerValueInit?: number
  /**
   * Значение/позиция возвращаемое стартовым ползунком
   */
  readonly onMinPointerValueChange: (value: number) => void
  /**
   * Значение/позиция возвращаемое конечным ползунком
   */
  readonly onMaxPointerValueChange: (value: number) => void
}

const MIN_TRACK_SCALE = 0
const MAX_TRACK_SCALE = 100

const clamp = (val: number, min: number, max: number) => {
  'worklet'

  return Math.min(Math.max(val, min), max)
}

/**
 * Используется для указания значения или диапазона значений с помощью ползунка
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-6090&m=dev
 */
export const Slider: FC<SliderProps> = ({
  disabled = false,
  range = false,
  minPointerValueInit = 0,
  maxPointerValueInit = 100,
  onMinPointerValueChange,
  onMaxPointerValueChange,
  testID,
  ...rest
}) => {
  const styles = useStyles()
  const minPointX = useSharedValue(0)
  const maxPointX = useSharedValue(0)

  const trackWidth = useSharedValue(0)
  const pointerWidth = styles.point.width

  const [isPressed, setIsPressed] = useState(false)

  const prevMinPointX = useSharedValue(0)
  const prevMaxPointX = useSharedValue(0)

  const pointerStyle = [styles.point, isPressed && styles.hovered]

  const lineStyle = [styles.line, isPressed && styles.hovered]

  const interpolateInitVal = (value: number, width: number) => {
    return interpolate(
      value,
      [MIN_TRACK_SCALE, MAX_TRACK_SCALE],
      [0, width - pointerWidth],
      Extrapolation.CLAMP
    )
  }

  const onContainerLayout = (event: LayoutChangeEvent) => {
    event.target.measure((x, y, width) => {
      trackWidth.value = width
      const min = interpolateInitVal(minPointerValueInit, width)
      const max = interpolateInitVal(maxPointerValueInit, width)

      minPointX.value = min
      maxPointX.value = max
    })
  }

  const returnMinVal = (value: number) => {
    const min = interpolate(
      value,
      [0, trackWidth.value - pointerWidth * 2],
      [MIN_TRACK_SCALE, MAX_TRACK_SCALE],
      Extrapolation.CLAMP
    )
    onMinPointerValueChange(min)
  }

  const returnMaxVal = (value: number) => {
    const min = interpolate(
      value,
      [pointerWidth, trackWidth.value - pointerWidth],
      [MIN_TRACK_SCALE, MAX_TRACK_SCALE],
      Extrapolation.CLAMP
    )
    onMaxPointerValueChange(min)
  }

  const panMinPoint = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
      prevMinPointX.value = minPointX.value
      runOnJS(setIsPressed)(true)
    })
    .onUpdate((event) => {
      const maxTranslateX = trackWidth.value - pointerWidth

      const minPointPosition = clamp(
        prevMinPointX.value + event.translationX,
        0,
        range ? maxPointX.value - pointerWidth : maxTranslateX
      )

      minPointX.value = minPointPosition
      runOnJS(returnMinVal)(minPointPosition)
    })
    .onFinalize(() => {
      runOnJS(setIsPressed)(false)
    })

  const minPointStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: minPointX.value }],
  }))

  const panMaxPoint = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
      prevMaxPointX.value = maxPointX.value
      runOnJS(setIsPressed)(true)
    })
    .onUpdate((event) => {
      const maxTranslateX = trackWidth.value - pointerWidth

      const maxPointPosition = clamp(
        prevMaxPointX.value + event.translationX,
        minPointX.value + pointerWidth,
        maxTranslateX
      )
      maxPointX.value = maxPointPosition
      runOnJS(returnMaxVal)(maxPointPosition)
    })
    .onFinalize(() => {
      runOnJS(setIsPressed)(false)
    })

  const maxPointStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: maxPointX.value }],
  }))

  const minLineStyle = useAnimatedStyle(() => ({
    left: 0,
    width: minPointX.value + pointerWidth / 2,
  }))

  const betweenLineStyle = useAnimatedStyle(() => ({
    left: minPointX.value + pointerWidth / 2,
    width: maxPointX.value - minPointX.value,
  }))

  return (
    <View
      style={[styles.container, disabled && styles.disabled]}
      testID={testID}
      onLayout={onContainerLayout}
      {...rest}
    >
      <View style={styles.track}>
        {range ? null : ( // индикатор старта
          <Animated.View style={[lineStyle, minLineStyle]} />
        )}

        {range ? ( // индикатор между точками
          <Animated.View style={[lineStyle, betweenLineStyle]} />
        ) : null}

        <GestureDetector gesture={panMinPoint}>
          <Animated.View
            pointerEvents={disabled ? 'none' : 'auto'}
            style={[pointerStyle, minPointStyle]}
          />
        </GestureDetector>

        {range ? ( // индикатор между точками
          <GestureDetector gesture={panMaxPoint}>
            <Animated.View
              pointerEvents={disabled ? 'none' : 'auto'}
              style={[pointerStyle, maxPointStyle]}
            />
          </GestureDetector>
        ) : null}
      </View>
    </View>
  )
}

const useStyles = makeStyles(({ theme, border }) => {
  return {
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    track: {
      height: theme.Form.Slider.sliderHorizontalHeight,
      backgroundColor: theme.Form.Slider.sliderBg,
      borderRadius: theme.Form.Slider.sliderHandleBorderRadius,
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
    },

    line: {
      height: theme.Form.Slider.sliderHorizontalHeight,
      borderRadius: theme.Form.Slider.sliderHandleBorderRadius,
      position: 'absolute',
      backgroundColor: theme.Form.Slider.sliderRangeBg,
    },

    point: {
      width: theme.Form.Slider.sliderHandleWidth,
      height: theme.Form.Slider.sliderHandleHeight,
      borderRadius: theme.Form.Slider.sliderHandleHeight / 2,
      position: 'absolute',
      backgroundColor: theme.Form.Slider.sliderHandleBg,
      borderWidth: border.Width['border-3'],
      borderColor: theme.Form.Slider.sliderHandleBorder,
    },

    disabled: { opacity: 0.6, mixBlendMode: 'luminosity' },

    hovered: { backgroundColor: theme.Form.Slider.sliderHandleHoverBg },
  }
})
