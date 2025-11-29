import { SvgUniversal } from '../../../utils/SvgUniversal'
import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

import { useIconStyle } from './useIconStyle'

export type ButtonIconComponentProps<Variant extends ButtonVariant> = Pick<
  Required<BaseButtonProps<Variant>>,
  'size' | 'variant' | 'disabled' | 'loading'
> &
  Pick<BaseButtonProps<Variant>, 'Icon'> &
  Pick<VariantStyles<Variant>, 'iconVariantStyles'>

export const ButtonIcon = <Variant extends ButtonVariant>({
  size,
  variant,
  disabled,
  loading,
  Icon,
  iconVariantStyles,
}: ButtonIconComponentProps<Variant>) => {
  const iconStyle = useIconStyle(
    size,
    variant,
    disabled,
    loading,
    iconVariantStyles
  )

  if (!Icon) {
    return null
  }

  return (
    <SvgUniversal
      height={iconStyle.height}
      source={Icon}
      style={iconStyle}
      testID='Button_Icon'
      width={iconStyle.width}
    />
  )
}
