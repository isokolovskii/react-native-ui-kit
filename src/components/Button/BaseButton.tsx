import { useState } from 'react'

import type { GestureResponderEvent } from 'react-native'

import type { ButtonProps, ButtonVariant, VariantStyles } from './types'
import {
  ButtonLeftArea,
  ButtonRightArea,
  ButtonLabel,
  ButtonContainer,
} from './utils'

export type BaseButtonComponentProps<Variant extends ButtonVariant> = Omit<
  ButtonProps<Variant>,
  'variant'
> & { readonly variant: Variant } & VariantStyles<Variant>

export const BaseButton = <Variant extends ButtonVariant>({
  size = 'base',
  shape = 'square',
  loading = false,
  variant,
  disabled = false,
  iconOnly,
  iconPosition = 'prefix',
  Icon,
  label,
  style,
  containerVariantStyles,
  labelVariantStyles,
  pressedVariantStyles,
  iconVariantStyles,
  pressedLabelVariantStyles,
  onPressIn: onPressInProp,
  onPressOut: onPressOutProp,
  ...props
}: BaseButtonComponentProps<Variant>) => {
  const [pressed, setPressed] = useState(false)

  const onPressIn = (event: GestureResponderEvent) => {
    onPressInProp?.(event)
    setPressed(true)
  }

  const onPressOut = (event: GestureResponderEvent) => {
    onPressOutProp?.(event)
    setPressed(false)
  }

  return (
    <ButtonContainer
      {...{
        size,
        variant,
        shape,
        disabled,
        loading,
        iconOnly,
        style,
        containerVariantStyles,
        pressedVariantStyles,
        onPressIn,
        onPressOut,
      }}
      {...props}
    >
      <ButtonLeftArea
        {...{
          size,
          variant,
          loading,
          disabled,
          Icon,
          iconPosition,
          iconVariantStyles: pressed
            ? pressedLabelVariantStyles
            : iconVariantStyles,
        }}
      />
      <ButtonLabel
        {...{
          size,
          variant,
          loading,
          disabled,
          iconOnly,
          label,
          labelVariantStyles: pressed
            ? pressedLabelVariantStyles
            : labelVariantStyles,
        }}
      />
      <ButtonRightArea
        {...{
          size,
          variant,
          loading,
          disabled,
          Icon,
          iconPosition,
          iconVariantStyles: pressed
            ? pressedLabelVariantStyles
            : iconVariantStyles,
        }}
      />
    </ButtonContainer>
  )
}
