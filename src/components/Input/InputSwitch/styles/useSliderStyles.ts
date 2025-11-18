import { useCallback, useEffect, useMemo } from 'react'
import { type PressableStateCallbackType, StyleSheet } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { makeStyles } from '../../../../utils/makeStyles'

export const useSliderStyles = (
  checked: boolean,
  disabled: boolean,
  danger: boolean
) => {
  const styles = useStyles()

  const calculateSliderBackground = useCallback(
    (checked: boolean, disabled: boolean, pressed: boolean) => {
      if (disabled) {
        if (checked) {
          return styles.sliderOnDisabled.backgroundColor
        }

        return styles.sliderDisabled.backgroundColor
      }

      if (pressed) {
        if (checked) {
          return styles.sliderOnPressed.backgroundColor
        }

        return styles.sliderPressed.backgroundColor
      }

      if (checked) {
        return styles.sliderOn.backgroundColor
      }

      return styles.sliderOff.backgroundColor
    },
    [
      styles.sliderDisabled.backgroundColor,
      styles.sliderOff.backgroundColor,
      styles.sliderOn.backgroundColor,
      styles.sliderOnDisabled.backgroundColor,
      styles.sliderOnPressed.backgroundColor,
      styles.sliderPressed.backgroundColor,
    ]
  )

  const calculateSliderBorderColor = useCallback(
    (danger: boolean) => {
      if (danger && !disabled) {
        return styles.sliderDanger.borderColor
      }

      return styles.sliderNoDanger.borderColor
    },
    [
      disabled,
      styles.sliderDanger.borderColor,
      styles.sliderNoDanger.borderColor,
    ]
  )

  const sliderBackground = useSharedValue(
    calculateSliderBackground(checked, disabled, false)
  )
  const sliderBorderColor = useSharedValue(calculateSliderBorderColor(danger))

  useEffect(() => {
    sliderBorderColor.value = withTiming(calculateSliderBorderColor(danger))
  }, [calculateSliderBorderColor, danger, sliderBorderColor])

  const sliderStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.slider,
        { backgroundColor: sliderBackground, borderColor: sliderBorderColor },
      ]),
    [sliderBackground, sliderBorderColor, styles.slider]
  )

  const onPressedChange = useCallback(
    ({ pressed }: PressableStateCallbackType) => {
      sliderBackground.value = withTiming(
        calculateSliderBackground(checked, disabled, pressed)
      )

      return styles.container
    },
    [
      calculateSliderBackground,
      checked,
      disabled,
      sliderBackground,
      styles.container,
    ]
  )

  return { sliderStyle, onPressedChange }
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
}))
