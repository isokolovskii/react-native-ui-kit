import { Text } from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

export type ButtonLabelComponentProps<Variant extends ButtonVariant> = Pick<
  BaseButtonProps<Variant>,
  'iconOnly' | 'label'
> &
  Pick<
    Required<BaseButtonProps<Variant>>,
    'size' | 'variant' | 'disabled' | 'loading'
  > &
  Pick<VariantStyles<Variant>, 'labelVariantStyles'>

export const ButtonLabel = <Variant extends ButtonVariant>({
  label,
  iconOnly,
  size,
  disabled,
  loading,
  variant,
  labelVariantStyles,
}: ButtonLabelComponentProps<Variant>) => {
  const styles = useStyles()

  if (iconOnly) {
    return null
  }

  return (
    <Text
      style={[
        styles.font,
        styles[size],
        labelVariantStyles[variant],
        (disabled || loading) && styles.disabled,
      ]}
      testID='Button_Text'
    >
      {label}
    </Text>
  )
}

const useStyles = makeStyles(({ theme, typography, fonts }) => ({
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
