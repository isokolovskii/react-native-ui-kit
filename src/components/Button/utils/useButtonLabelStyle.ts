import { useMemo } from 'react'
import { type StyleProp, StyleSheet, type TextStyle } from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type {
  BaseButtonProps,
  ButtonVariant,
  LabelVariantStyles,
} from '../types'

import { useTypeBasedStyle } from './useTypeBasedStyle'

export const useButtonLabelStyle = <Variant extends ButtonVariant>(
  size: Required<BaseButtonProps<Variant>>['size'],
  variant: Required<BaseButtonProps<Variant>>['variant'],
  disabled: Required<BaseButtonProps<Variant>>['disabled'],
  loading: Required<BaseButtonProps<Variant>>['loading'],
  labelVariantStyles: LabelVariantStyles<Variant>
) => {
  const styles = useButtonLabelStyles()

  const sizeBasedStyle = useTypeBasedStyle(size, styles)
  const variantBasedStyle = useTypeBasedStyle(variant, labelVariantStyles)

  return useMemo(() => {
    const containerStyle: Array<StyleProp<TextStyle>> = [
      styles.font,
      sizeBasedStyle,
      variantBasedStyle,
    ]

    if (disabled || loading) {
      containerStyle.push(styles.disabled)
    }

    return StyleSheet.flatten(containerStyle)
  }, [
    disabled,
    loading,
    sizeBasedStyle,
    styles.disabled,
    styles.font,
    variantBasedStyle,
  ])
}

const useButtonLabelStyles = makeStyles(({ theme, typography, fonts }) => ({
  font: {
    fontWeight: 600,
    includeFontPadding: false,
    verticalAlign: 'middle',
    fontFamily: fonts.primary,
  },

  xlarge: { fontSize: typography.Size['text-xl'] },

  large: { fontSize: typography.Size['text-xl'] },

  base: { fontSize: typography.Size['text-base'] },

  small: { fontSize: typography.Size['text-sm'] },

  disabled: { color: theme.Button.Disabled.disabledButtonTextColor },
}))
