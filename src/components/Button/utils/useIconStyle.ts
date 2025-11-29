import { type ColorValue, StyleSheet } from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type {
  BaseButtonProps,
  ButtonVariant,
  IconVariantStyles,
} from '../types'

export const useIconStyle = <Variant extends ButtonVariant>(
  size: Required<BaseButtonProps<Variant>>['size'],
  variant: Required<BaseButtonProps<Variant>>['variant'],
  disabled: Required<BaseButtonProps<Variant>>['disabled'],
  loading: Required<BaseButtonProps<Variant>>['loading'],
  iconVariantStyles: IconVariantStyles<Variant>
) => {
  const styles = useStyles()

  return StyleSheet.flatten([
    styles[size],
    iconVariantStyles[variant],
    (disabled || loading) && styles.disabled,
  ]) as { width: number; height: number; color: ColorValue }
}

const useStyles = makeStyles(({ theme, typography }) => ({
  xlarge: {
    height: typography.Size['text-2xl'],
    width: typography.Size['text-2xl'],
  },

  large: {
    height: typography.Size['text-2xl'],
    width: typography.Size['text-2xl'],
  },

  base: {
    height: typography.Size['text-xl'],
    width: typography.Size['text-xl'],
  },

  small: {
    height: typography.Size['text-base'],
    width: typography.Size['text-base'],
  },

  disabled: { color: theme.Button.Disabled.disabledButtonTextColor },
}))
