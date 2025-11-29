import { useEffect, type FC } from 'react'
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

import { makeStyles } from '../../utils/makeStyles'

// eslint-disable-next-line import-x/no-deprecated
const AnimatedSvg = Animated.createAnimatedComponent(Svg)
// eslint-disable-next-line import-x/no-deprecated
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const STROKE_WIDTH = 2

type ProgressSpinnerSize = 'xl' | 'lg' | 'md' | 'sm'

export interface ProgressSpinnerProps {
  /**
   * Выбор размера компонента
   * @default 'md'
   */
  readonly size?: ProgressSpinnerSize

  /**
   * Выбор цвета компонента
   * @default 'primary'
   */
  readonly fill?: 'primary' | 'white'
}

const sizeToDp: Record<ProgressSpinnerSize, number> = {
  xl: 56,
  lg: 42,
  md: 28,
  sm: 14,
}

/**
 * Используется для отображения состояний ожидания в интерфейсе
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=1219-3086
 */
export const ProgressSpinner: FC<ProgressSpinnerProps> = ({
  size = 'md',
  fill = 'primary',
}) => {
  const styles = useStyles()
  const circleAnimation = useSharedValue(0)
  const containerAnimation = useSharedValue(0)

  const sizeInDp = sizeToDp[size]

  const center = sizeInDp / 2
  const radius = center - STROKE_WIDTH / 2
  const circleLength = 2 * Math.PI * radius

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${containerAnimation.value * 360}deg` }],
  }))

  const circleAnimatedProps = useAnimatedProps(() => ({
    strokeDasharray: [
      interpolate(
        circleAnimation.value,
        [0, 0.5, 1],
        [1, 0.7 * circleLength, circleLength]
      ),
      circleLength,
    ],
    strokeDashoffset: interpolate(
      circleAnimation.value,
      [0, 0.5, 1],
      [0, -(0.3 * circleLength), -circleLength + 2]
    ),
  }))

  useEffect(() => {
    circleAnimation.value = withRepeat(
      withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
      -1,
      false
    )
  }, [circleAnimation])

  useEffect(() => {
    containerAnimation.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.linear }),
      -1
    )
  }, [containerAnimation])

  return (
    <AnimatedSvg
      style={[containerAnimatedStyle, { width: sizeInDp, height: sizeInDp }]}
      testID={TestId.ProgressSpinner}
    >
      <AnimatedCircle
        animatedProps={circleAnimatedProps}
        cx={center}
        cy={center}
        fill='none'
        r={radius}
        stroke={fill === 'primary' ? styles.primary.color : styles.white.color}
        strokeLinecap='round'
        strokeWidth={STROKE_WIDTH}
      />
    </AnimatedSvg>
  )
}

const useStyles = makeStyles(({ theme, global }) => ({
  primary: { color: theme.General.primaryColor },
  white: { color: global.Neutrals.White['white-100'] },
}))

enum TestId {
  ProgressSpinner = 'ProgressSpinner',
}
