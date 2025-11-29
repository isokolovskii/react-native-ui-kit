import type { FC } from 'react'
import {
  Pressable,
  type PressableProps,
  type PressableStateCallbackType,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { makeStyles } from '../../../utils/makeStyles'

export interface InputSwitchProps extends PressableProps {
  readonly checked: boolean
  readonly onCheckedChange?: (checked: boolean) => void
  readonly disabled?: boolean
  readonly danger?: boolean
}

export const InputSwitch: FC<InputSwitchProps> = ({
  checked,
  onCheckedChange,
  disabled = false,
  danger = false,
  ...props
}) => {
  const styles = useStyles()

  const isPressed = useSharedValue(false)

  const targetBackgroundColor = useDerivedValue(() => {
    return styles[
      calculateSliderBackgroundStyleName(checked, disabled, isPressed.value)
    ].backgroundColor
  }, [checked, disabled, isPressed])

  const targetBorderColor = useDerivedValue(() => {
    return styles[calculateSliderBorderStyleName(danger, disabled)].borderColor
  }, [danger])

  const sliderAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(targetBackgroundColor.value),
    borderColor: withTiming(targetBorderColor.value),
  }))

  const onPressedChange = ({ pressed }: PressableStateCallbackType) => {
    isPressed.value = pressed

    return styles.container
  }

  const animatedLeft = useDerivedValue(() => {
    return checked ? styles.handleOn.left : styles.handleOff.left
  }, [checked, styles])

  const animatedBackgroundColor = useDerivedValue(() => {
    return checked
      ? styles.handleOn.backgroundColor
      : styles.handle.backgroundColor
  }, [checked, styles])

  const handleAnimatedStyle = useAnimatedStyle(() => ({
    left: withTiming(animatedLeft.value),
    backgroundColor: withTiming(animatedBackgroundColor.value),
  }))

  const handlePress = () => {
    onCheckedChange?.(!checked)
  }

  return (
    <Pressable
      disabled={disabled}
      style={onPressedChange}
      onPress={handlePress}
      {...props}
    >
      <Animated.View style={[styles.slider, sliderAnimatedStyle]}>
        <Animated.View style={[styles.handle, handleAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  )
}

const useStyles = makeStyles(({ theme, border }) => ({
  container: {
    height: theme.Form.inputSwitch.inputSwitchHeight,
    width: theme.Form.inputSwitch.inputSwitchWidth,
  },

  slider: {
    padding: theme.Form.inputSwitch.inputSwitchSliderPadding,
    height: theme.Form.inputSwitch.inputSwitchHeight,
    width: theme.Form.inputSwitch.inputSwitchWidth,
    borderRadius: border.Radius['rounded-full'],
    borderWidth: border.Width.border,
  },

  sliderOff: { backgroundColor: theme.Form.inputSwitch.inputSwitchSliderOffBg },

  sliderOn: { backgroundColor: theme.Form.inputSwitch.inputSwitchSliderOnBg },

  sliderPressed: {
    backgroundColor: theme.Form.inputSwitch.inputSwitchSliderOffHoverBg,
  },

  sliderOnPressed: {
    backgroundColor: theme.Form.inputSwitch.inputSwitchSliderOnHoverBg,
  },

  sliderDisabled: {
    backgroundColor: theme.custom.inputSwitch.inputSwitchSliderOffDisabledBg,
  },

  sliderOnDisabled: {
    backgroundColor: theme.custom.inputSwitch.inputSwitchSliderOnDisabledBg,
  },

  sliderNoDanger: { borderColor: 'transparent' },

  sliderDanger: {
    borderColor: theme.Form.InputText.inputErrorBorderColor,
    outlineColor: theme.General.focusOutlineErrorColor,
    outlineWidth: Math.round(theme.General.focusShadowWidth),
  },

  handle: {
    height: theme.Form.inputSwitch.inputSwitchHandleHeight,
    width: theme.Form.inputSwitch.inputSwitchHandleWidth,
    borderRadius: border.Radius['rounded-full'],
    backgroundColor: theme.Form.inputSwitch.inputSwitchHandleOffBg,
    position: 'absolute',
    top: theme.Form.inputSwitch.inputSwitchSliderPadding - border.Width.border,
  },

  handleOff: {
    backgroundColor: theme.Form.inputSwitch.inputSwitchHandleOffBg,
    left: theme.Form.inputSwitch.inputSwitchSliderPadding - border.Width.border,
  },

  handleOn: {
    backgroundColor: theme.Form.inputSwitch.inputSwitchHandleOnBg,
    left:
      theme.Form.inputSwitch.inputSwitchWidth -
      theme.Form.inputSwitch.inputSwitchSliderPadding -
      theme.Form.inputSwitch.inputSwitchHandleWidth -
      1,
  },
}))

const calculateSliderBackgroundStyleName = (
  checked: boolean,
  disabled: boolean,
  pressed: boolean
) => {
  if (disabled) {
    if (checked) {
      return 'sliderOnDisabled'
    }

    return 'sliderDisabled'
  }

  if (pressed) {
    if (checked) {
      return 'sliderOnPressed'
    }

    return 'sliderPressed'
  }

  if (checked) {
    return 'sliderOn'
  }

  return 'sliderOff'
}

const calculateSliderBorderStyleName = (danger: boolean, disabled: boolean) => {
  if (danger && !disabled) {
    return 'sliderDanger'
  }

  return 'sliderNoDanger'
}
