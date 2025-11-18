import { makeStyles } from '../../../utils/makeStyles'

export const useBasicButtonStyles = () => {
  const labelVariantStyles = useLabelVariantStyles()
  const pressedVariantStyles = usePressedVariantStyles()
  const containerVariantStyles = useContainerVariantStyles()
  const iconVariantStyles = useIconVariantStyles()
  const pressedLabelVariantStyles = usePressedLabelVariantStyles()

  return {
    containerVariantStyles,
    labelVariantStyles,
    pressedVariantStyles,
    iconVariantStyles,
    pressedLabelVariantStyles,
  }
}

const useLabelVariantStyles = makeStyles(({ theme }) => ({
  primary: { color: theme.Button.Brand.buttonTextColor },

  secondary: { color: theme.Button.Primary.secondaryButtonTextColor },

  tertiary: { color: theme.Button.Secondary.helpButtonTextColor },

  text: { color: theme.Button.Text.textButtonTextColor },

  link: { color: theme.Button.Text.textButtonTextColor },
}))

const usePressedVariantStyles = makeStyles(({ theme }) => ({
  primary: {
    borderColor: theme.Button.Brand.buttonBorderColor,
    backgroundColor: theme.Button.Brand.buttonHoverBg,
  },

  secondary: {
    borderColor: theme.Button.Primary.secondaryButtonHoverBorderColor,
    backgroundColor: theme.Button.Primary.secondaryButtonHoverBg,
  },

  tertiary: {
    borderColor: theme.Button.Secondary.helpButtonHoverBorderColor,
    backgroundColor: theme.Button.Secondary.helpButtonHoverBg,
  },

  text: {
    borderColor: theme.Button.Brand.buttonBorderColor,
    backgroundColor: theme.Button.Text.textButtonHoverBg,
  },

  link: {},
}))

const useContainerVariantStyles = makeStyles(({ theme, spacing }) => ({
  primary: {
    borderColor: theme.Button.Brand.buttonBorderColor,
    backgroundColor: theme.Button.Brand.buttonBg,
  },

  secondary: {
    borderColor: theme.Button.Primary.secondaryButtonBorderColor,
    backgroundColor: theme.Button.Primary.secondaryButtonBg,
  },

  tertiary: {
    borderColor: theme.Button.Secondary.helpButtonBorderColor,
    backgroundColor: theme.Button.Secondary.helpButtonBg,
  },

  text: {
    borderColor: theme.Button.Brand.buttonBorderColor,
    backgroundColor: theme.Button.Text.textButtonBg,
  },

  link: {
    paddingHorizontal: 0,
    paddingVertical: spacing.Padding['p-1'],
    height: 'auto',
    minHeight: 'auto',
    borderColor: theme.Button.Brand.buttonBorderColor,
    backgroundColor: theme.Button.Text.textButtonBg,
  },
}))

const useIconVariantStyles = makeStyles(({ theme }) => ({
  primary: { color: theme.Button.Brand.buttonTextColor },

  secondary: { color: theme.Button.Primary.secondaryButtonTextColor },

  tertiary: { color: theme.Button.Secondary.helpButtonTextColor },

  text: { color: theme.Button.Text.textButtonTextColor },

  link: { color: theme.Button.Text.textButtonTextColor },
}))

const usePressedLabelVariantStyles = makeStyles(({ theme, typography }) => ({
  primary: { color: theme.Button.Brand.buttonTextColor },

  secondary: { color: theme.Button.Primary.secondaryButtonTextColor },

  tertiary: { color: theme.Button.Secondary.helpButtonTextColor },

  text: { color: theme.Button.Text.textButtonTextColor },

  link: { color: typography.Color.Common['text-color-secondary'] },
}))
