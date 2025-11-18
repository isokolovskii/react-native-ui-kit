import { makeStyles } from '../../../utils/makeStyles'

export const useDangerButtonStyles = () => {
  const labelVariantStyles = useLabelVariantStyles()
  const pressedVariantStyles = usePressedVariantStyles()
  const containerVariantStyles = useContainerVariantStyles()
  const iconVariantStyles = useIconVariantStyles()

  return {
    containerVariantStyles,
    labelVariantStyles,
    pressedVariantStyles,
    iconVariantStyles,
    pressedLabelVariantStyles: labelVariantStyles,
  }
}

const useLabelVariantStyles = makeStyles(({ theme }) => ({
  basic: { color: theme.Button.Severity.Danger.Basic.dangerButtonTextColor },

  outlined: {
    color: theme.Button.Severity.Danger.Outlined.dangerOutlinedButtonTextColor,
  },

  text: { color: theme.Button.Severity.Danger.Text.dangerTextButtonTextColor },
}))

const usePressedVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Danger.Basic.dangerButtonBorderColor,
    backgroundColor: theme.Button.Severity.Danger.Basic.dangerButtonHoverBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Danger.Outlined
        .dangerOutlinedButtonHoverBorderColor,
    backgroundColor:
      theme.Button.Severity.Danger.Outlined.dangerOutlinedButtonHoverBg,
  },

  text: {
    borderColor: theme.Surface['surface-transparent'],
    backgroundColor: theme.Button.Severity.Danger.Text.dangerTextButtonHoverBg,
  },
}))

const useContainerVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Danger.Basic.dangerButtonBorderColor,
    backgroundColor: theme.Button.Severity.Danger.Basic.dangerButtonBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Danger.Outlined.dangerOutlinedButtonBorderColor,
    backgroundColor:
      theme.Button.Severity.Danger.Outlined.dangerOutlinedButtonBg,
  },

  text: {
    borderColor: theme.Button.Severity.Danger.Basic.dangerButtonBorderColor,
    backgroundColor: theme.Button.Severity.Danger.Text.dangerTextButtonBg,
  },
}))

const useIconVariantStyles = makeStyles(({ theme }) => ({
  basic: { color: theme.Button.Severity.Danger.Basic.dangerButtonTextColor },

  outlined: {
    color: theme.Button.Severity.Danger.Outlined.dangerOutlinedButtonTextColor,
  },

  text: { color: theme.Button.Severity.Danger.Text.dangerTextButtonTextColor },
}))
