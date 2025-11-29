import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

import { ButtonActivityIndicator } from './ButtonActivityIndicator'
import { ButtonIcon } from './ButtonIcon'

export type ButtonRightAreaComponentProps<Variant extends ButtonVariant> = Pick<
  BaseButtonProps<Variant>,
  'iconPosition' | 'Icon'
> &
  Pick<
    Required<BaseButtonProps<Variant>>,
    'size' | 'variant' | 'loading' | 'disabled'
  > &
  Pick<VariantStyles<Variant>, 'iconVariantStyles'>

export const ButtonRightArea = <Variant extends ButtonVariant>({
  size,
  iconPosition,
  variant,
  Icon,
  loading,
  disabled,
  iconVariantStyles,
}: ButtonRightAreaComponentProps<Variant>) => {
  if (iconPosition === 'right' || iconPosition === 'postfix') {
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
