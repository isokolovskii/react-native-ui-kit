import { useMemo } from 'react'
import { type ColorValue, StyleSheet, type TextStyle } from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type {
  BaseButtonProps,
  ButtonVariant,
  IconVariantStyles,
} from '../types'

import { useTypeBasedStyle } from './useTypeBasedStyle'

export const useIconStyle = <Variant extends ButtonVariant>(
  size: Required<BaseButtonProps<Variant>>['size'],
  variant: Required<BaseButtonProps<Variant>>['variant'],
  disabled: Required<BaseButtonProps<Variant>>['disabled'],
  loading: Required<BaseButtonProps<Variant>>['loading'],
  iconVariantStyles: IconVariantStyles<Variant>
) => {
  const styles = useStyles()

  const sizeBasedStyle = useTypeBasedStyle(size, styles)
  const variantBasedStyle = useTypeBasedStyle(variant, iconVariantStyles)

  return useMemo(() => {
    const containerStyle = [sizeBasedStyle, variantBasedStyle] as TextStyle[]

    if (disabled || loading) {
      containerStyle.push(styles.disabled)
    }

    return StyleSheet.flatten(containerStyle) as {
      width: number
      height: number
      color: ColorValue
    }
  }, [disabled, loading, sizeBasedStyle, styles.disabled, variantBasedStyle])
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
