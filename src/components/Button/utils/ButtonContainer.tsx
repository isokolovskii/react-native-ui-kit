import type { ReactNode } from 'react'
import { Pressable } from 'react-native'

import type { BaseButtonProps, ButtonVariant, VariantStyles } from '../types'

import { useButtonContainerCallbackStyle } from './useButtonContainerCallbackStyle'

export type ButtonContainerComponentProps<Variant extends ButtonVariant> = Omit<
  BaseButtonProps<Variant>,
  | 'size'
  | 'variant'
  | 'disabled'
  | 'loading'
  | 'shape'
  | 'Icon'
  | 'iconPosition'
  | 'label'
> &
  Pick<
    Required<BaseButtonProps<Variant>>,
    'size' | 'variant' | 'disabled' | 'loading' | 'shape'
  > & { readonly children: ReactNode } & Pick<
    VariantStyles<Variant>,
    'containerVariantStyles' | 'pressedVariantStyles'
  >

export const ButtonContainer = <Variant extends ButtonVariant>({
  style,
  size,
  disabled,
  loading,
  variant,
  shape,
  iconOnly,
  children,
  containerVariantStyles,
  pressedVariantStyles,
  pressableRef,
  ...props
}: ButtonContainerComponentProps<Variant>) => {
  const containerCallbackStyle = useButtonContainerCallbackStyle(
    size,
    variant,
    shape,
    disabled,
    loading,
    iconOnly,
    style,
    containerVariantStyles,
    pressedVariantStyles
  )

  return (
    <Pressable
      accessibilityRole='button'
      disabled={disabled || loading}
      ref={pressableRef}
      style={containerCallbackStyle}
      {...props}
    >
      {children}
    </Pressable>
  )
}
