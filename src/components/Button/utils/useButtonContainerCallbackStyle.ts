import {
  type PressableStateCallbackType,
  type StyleProp,
  StyleSheet,
  type ViewStyle,
} from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type {
  BaseButtonProps,
  ButtonVariant,
  ContainerVariantStyles,
  PressedVariantStyles,
} from '../types'

export const useButtonContainerCallbackStyle = <Variant extends ButtonVariant>(
  size: Required<BaseButtonProps<Variant>>['size'],
  variant: Required<BaseButtonProps<Variant>>['variant'],
  shape: Required<BaseButtonProps<Variant>>['shape'],
  disabled: Required<BaseButtonProps<Variant>>['disabled'],
  loading: Required<BaseButtonProps<Variant>>['loading'],
  iconOnly: Required<BaseButtonProps<Variant>>['iconOnly'],
  style: BaseButtonProps<Variant>['style'],
  containerVariantStyles: ContainerVariantStyles<Variant>,
  pressedVariantStyles: PressedVariantStyles<Variant>
) => {
  const styles = useButtonContainerStyle()

  const sizeBasedStyle = styles[size]
  const variantBasedStyle = containerVariantStyles[variant]
  const shapeBasedStyle = styles[shape]
  const pressedStyle = pressedVariantStyles[variant]
  const iconOnlyLinkContainerStyle = useIconOnlyLinkContainerStyle()
  const disabledStyle = variant === 'link' ? undefined : styles.disabled

  return ({ pressed }: PressableStateCallbackType) => {
    const containerStyle: Array<StyleProp<ViewStyle>> = [
      styles.container,
      sizeBasedStyle,
      variantBasedStyle,
      shapeBasedStyle,
    ]

    if (iconOnly) {
      containerStyle.push(styles.iconOnly)

      if (variant === 'link') {
        containerStyle.push(iconOnlyLinkContainerStyle[size])
      }
    }

    if (disabled || loading) {
      containerStyle.push(disabledStyle)
    }

    if (pressed) {
      containerStyle.push(pressedStyle)
    }

    if (typeof style === 'function') {
      containerStyle.push(style({ pressed }))
    } else {
      containerStyle.push(style)
    }

    return StyleSheet.flatten(containerStyle)
  }
}

const useButtonContainerStyle = makeStyles(({ theme, border, spacing }) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: border.Width.border,
  },

  xlarge: {
    paddingHorizontal: spacing.Padding['p-6'],
    paddingVertical: theme.Button.Common.buttonPaddingTopBottom,
    height: theme.Button.Common.buttonHeightXL,
    minHeight: theme.Button.Common.buttonHeightXL,
    maxHeight: theme.Button.Common.buttonHeightXL,
    gap: spacing.Gap['gap-3'],
    borderRadius: theme.General.borderRadius2XL,
  },

  large: {
    paddingHorizontal: spacing.Padding['p-6'],
    paddingVertical: theme.Button.Common.buttonPaddingTopBottom,
    height: theme.Button.Common.buttonHeightLG,
    minHeight: theme.Button.Common.buttonHeightLG,
    maxHeight: theme.Button.Common.buttonHeightLG,
    gap: spacing.Gap['gap-3'],
    borderRadius: theme.General.borderRadius2XL,
  },

  base: {
    paddingHorizontal: theme.Button.Common.buttonPaddingLeftRight,
    paddingVertical: theme.Button.Common.buttonPaddingTopBottom,
    height: theme.Button.Common.buttonHeight,
    minHeight: theme.Button.Common.buttonHeight,
    maxHeight: theme.Button.Common.buttonHeight,
    gap: theme.General.inlineSpacing,
    borderRadius: theme.General.borderRadiusXL,
  },

  small: {
    paddingHorizontal: spacing.Padding['p-3'],
    paddingVertical: theme.Button.Common.buttonPaddingTopBottom,
    height: theme.Button.Common.buttonHeightSM,
    minHeight: theme.Button.Common.buttonHeightSM,
    maxHeight: theme.Button.Common.buttonHeightSM,
    gap: theme.General.inlineSpacing,
    borderRadius: theme.General.borderRadiusXL,
  },

  square: {},

  circle: { borderRadius: border.Radius['rounded-full'] },

  disabled: {
    backgroundColor: theme.Button.Disabled.disabledButtonBg,
    borderColor: theme.Button.Disabled.disabledButtonBorderColor,
  },

  iconOnly: { aspectRatio: 1 },
}))

const useIconOnlyLinkContainerStyle = makeStyles(({ spacing, sizing }) => ({
  xlarge: {
    paddingHorizontal: spacing.Gap['gap-1'],
    paddingVertical: spacing.Gap['gap-1'],
    height: sizing.Height['h-2'],
    minHeight: sizing.Height['h-2'],
    maxHeight: sizing.Height['h-2'],
  },

  large: {
    paddingHorizontal: spacing.Gap['gap-0'],
    paddingVertical: spacing.Gap['gap-0'],
    height: 24.5,
    minHeight: 24.5,
    maxHeight: 24.5,
  },

  base: {
    paddingHorizontal: spacing.Gap['gap-1'],
    paddingVertical: spacing.Gap['gap-1'],
    height: 21.5,
    minHeight: 21.5,
    maxHeight: 21.5,
  },

  small: {
    paddingHorizontal: spacing.Gap['gap-1'],
    paddingVertical: spacing.Gap['gap-1'],
    height: sizing.Height['h-1'],
    minHeight: sizing.Height['h-2'],
    maxHeight: sizing.Height['h-2'],
  },
}))
