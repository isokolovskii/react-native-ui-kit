import { Text } from 'react-native'

import { genericMemo } from '../../../utils/genericMemo'
import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

import { useButtonLabelStyle } from './useButtonLabelStyle'

export type ButtonLabelComponentProps<Variant extends ButtonVariant> = Pick<
  BaseButtonProps<Variant>,
  'iconOnly' | 'label'
> &
  Pick<
    Required<BaseButtonProps<Variant>>,
    'size' | 'variant' | 'disabled' | 'loading'
  > &
  Pick<VariantStyles<Variant>, 'labelVariantStyles'>

export const ButtonLabelComponent = <Variant extends ButtonVariant>({
  label,
  iconOnly,
  size,
  disabled,
  loading,
  variant,
  labelVariantStyles,
}: ButtonLabelComponentProps<Variant>) => {
  const labelStyle = useButtonLabelStyle(
    size,
    variant,
    disabled,
    loading,
    labelVariantStyles
  )

  if (iconOnly) {
    return null
  }

  return (
    <Text style={labelStyle} testID='Button_Text'>
      {label}
    </Text>
  )
}

export const ButtonLabel = genericMemo(ButtonLabelComponent)
