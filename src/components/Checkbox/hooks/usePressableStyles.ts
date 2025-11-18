import { useCallback, useMemo } from 'react'

import { makeStyles } from '../../../utils/makeStyles'
import type { CheckboxProps } from '../Checkbox'

export const usePressableStyles = ({
  checked,
  indeterminate = false,
  disabled = false,
  state,
}: Pick<CheckboxProps, 'checked' | 'indeterminate' | 'disabled' | 'state'>) => {
  const styles = useStyles()

  const styleMap = useMemo(
    () => ({
      default: { filled: styles.defaultFilled, clean: styles.defaultClean },
      disabled: { filled: styles.disabledFilled, clean: styles.disabledClean },
      danger: {
        filled: { ...styles.dangerFilled, ...styles.dangerOutline },
        clean: { ...styles.dangerClean, ...styles.dangerOutline },
      },
      hover: { filled: styles.hoverFilled, clean: styles.hoverClean },
    }),
    [
      styles.defaultFilled,
      styles.defaultClean,
      styles.disabledFilled,
      styles.disabledClean,
      styles.dangerFilled,
      styles.dangerClean,
      styles.hoverFilled,
      styles.hoverClean,
      styles.dangerOutline,
    ]
  )

  return useCallback(
    (pressed: boolean) => {
      const isFilled = checked || indeterminate
      const stateStyles =
        state in styleMap && isFilled
          ? styleMap[state].filled
          : styleMap[state].clean
      const disabledStyles = isFilled
        ? styleMap.disabled.filled
        : styleMap.disabled.clean
      const pressedStyles = isFilled
        ? styleMap.hover.filled
        : styleMap.hover.clean

      return [
        styles.container,
        stateStyles,
        disabled && disabledStyles,
        pressed && pressedStyles,
      ]
    },
    [checked, indeterminate, disabled, state, styles.container, styleMap]
  )
}

const useStyles = makeStyles(({ theme, border }) => ({
  container: {
    width: theme.Form.Checkbox.checkboxWidth,
    height: theme.Form.Checkbox.checkboxHeight,
    borderRadius: border.Radius['rounded-lg'],
    borderWidth: border.Width.border,
  },
  defaultClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputBorderColor,
  },
  defaultFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveBg,
    borderColor: theme.Form.Checkbox.checkboxActiveBorderColor,
  },
  hoverClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputHoverBorderColor,
  },
  hoverFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveHoverBg,
    borderColor: theme.Form.Checkbox.checkboxActiveHoverBorderColor,
  },
  dangerClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputErrorBorderColor,
  },
  dangerFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveBg,
    borderColor: theme.Form.InputText.inputErrorBorderColor,
  },
  dangerOutline: {
    outlineStyle: 'solid',
    outlineColor: theme.General.focusOutlineErrorColor,
    outlineWidth: Math.round(theme.General.focusShadowWidth),
  },
  disabledClean: {
    backgroundColor: theme.Button.Disabled.disabledButtonBg,
    borderColor: theme.Form.InputText.inputBorderColor,
    outlineWidth: 0,
    mixBlendMode: 'luminosity',
  },
  disabledFilled: {
    borderColor: theme.Form.Checkbox.checkboxActiveBorderColor,
    opacity: 0.2,
    outlineWidth: 0,
    mixBlendMode: 'luminosity',
  },
}))
