import { genericMemo } from '../../../utils/genericMemo'
import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

import { ButtonActivityIndicator } from './ButtonActivityIndicator'
import { ButtonIcon } from './ButtonIcon'

export type ButtonLeftAreaComponentProps<Variant extends ButtonVariant> = Pick<
  BaseButtonProps<Variant>,
  'iconPosition' | 'Icon'
> &
  Pick<
    Required<BaseButtonProps<Variant>>,
    'size' | 'variant' | 'loading' | 'disabled'
  > &
  Pick<VariantStyles<Variant>, 'iconVariantStyles'>

export const ButtonLeftAreaComponent = <Variant extends ButtonVariant>({
  size,
  iconPosition,
  variant,
  Icon,
  loading,
  disabled,
  iconVariantStyles,
}: ButtonLeftAreaComponentProps<Variant>) => {
  if (iconPosition === 'left' || iconPosition === 'prefix') {
    if (loading && !disabled) {
      return <ButtonActivityIndicator size={size} />
    }

    return (
      <ButtonIcon
        {...{ size, variant, disabled, loading, Icon, iconVariantStyles }}
      />
    )
  }

  return null
}

export const ButtonLeftArea = genericMemo(ButtonLeftAreaComponent)
