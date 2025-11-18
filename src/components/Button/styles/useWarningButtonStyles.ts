import { makeStyles } from '../../../utils/makeStyles'

export const useWarningButtonStyles = () => {
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
  basic: { color: theme.Button.Severity.Warning.Basic.warningButtonTextColor },

  outlined: {
    color:
      theme.Button.Severity.Warning.Outlined.warningOutlinedButtonTextColor,
  },

  text: {
    color: theme.Button.Severity.Warning.Text.warningTextButtonTextColor,
  },
}))

const usePressedVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Warning.Basic.warningButtonBorderColor,
    backgroundColor: theme.Button.Severity.Warning.Basic.warningButtonHoverBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Warning.Outlined
        .warningOutlinedButtonHoverBorderColor,
    backgroundColor:
      theme.Button.Severity.Warning.Outlined.warningOutlinedButtonHoverBg,
  },

  text: {
    borderColor: theme.Surface['surface-transparent'],
    backgroundColor:
      theme.Button.Severity.Warning.Text.warningTextButtonHoverBg,
  },
}))

const useContainerVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Warning.Basic.warningButtonBorderColor,
    backgroundColor: theme.Button.Severity.Warning.Basic.warningButtonBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Warning.Outlined.warningOutlinedButtonBorderColor,
    backgroundColor:
      theme.Button.Severity.Warning.Outlined.warningOutlinedButtonBg,
  },

  text: {
    borderColor: theme.Button.Severity.Warning.Basic.warningButtonBorderColor,
    backgroundColor: theme.Button.Severity.Warning.Text.warningTextButtonBg,
  },
}))

const useIconVariantStyles = makeStyles(({ theme }) => ({
  basic: { color: theme.Button.Severity.Warning.Basic.warningButtonTextColor },

  outlined: {
    color:
      theme.Button.Severity.Warning.Outlined.warningOutlinedButtonTextColor,
  },

  text: {
    color: theme.Button.Severity.Warning.Text.warningTextButtonTextColor,
  },
}))
