import { makeStyles } from '../../../utils/makeStyles'

export const useInfoButtonStyles = () => {
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
  basic: { color: theme.Button.Severity.Info.Basic.infoButtonTextColor },

  outlined: {
    color: theme.Button.Severity.Info.Outlined.infoOutlinedButtonTextColor,
  },

  text: { color: theme.Button.Severity.Info.Text.infoTextButtonTextColor },
}))

const usePressedVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Info.Basic.infoButtonBorderColor,
    backgroundColor: theme.Button.Severity.Info.Basic.infoButtonHoverBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Info.Outlined.infoOutlinedButtonHoverBorderColor,
    backgroundColor:
      theme.Button.Severity.Info.Outlined.infoOutlinedButtonHoverBg,
  },

  text: {
    borderColor: theme.Surface['surface-transparent'],
    backgroundColor: theme.Button.Severity.Info.Text.infoTextButtonHoverBg,
  },
}))

const useContainerVariantStyles = makeStyles(({ theme }) => ({
  basic: {
    borderColor: theme.Button.Severity.Info.Basic.infoButtonBorderColor,
    backgroundColor: theme.Button.Severity.Info.Basic.infoButtonBg,
  },

  outlined: {
    borderColor:
      theme.Button.Severity.Info.Outlined.infoOutlinedButtonBorderColor,
    backgroundColor: theme.Button.Severity.Info.Outlined.infoOutlinedButtonBg,
  },

  text: {
    borderColor: theme.Button.Severity.Info.Basic.infoButtonBorderColor,
    backgroundColor: theme.Button.Severity.Info.Text.infoTextButtonBg,
  },
}))

const useIconVariantStyles = makeStyles(({ theme }) => ({
  basic: { color: theme.Button.Severity.Info.Basic.infoButtonTextColor },

  outlined: {
    color: theme.Button.Severity.Info.Outlined.infoOutlinedButtonTextColor,
  },

  text: { color: theme.Button.Severity.Info.Text.infoTextButtonTextColor },
}))
