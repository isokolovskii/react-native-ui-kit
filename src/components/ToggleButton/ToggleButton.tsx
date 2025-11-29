import type { FC } from 'react'
import {
  type AccessibilityProps,
  Pressable,
  type PressableStateCallbackType,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface ToggleButtonProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /** Обработчик нажатия на кнопку */
  readonly onPress: () => void
  /**
   * true, если необходим компонент в активном состоянии
   * @default false
   */
  readonly checked?: boolean
  /**
   * Управление доступностью компонента
   * @default false
   */
  readonly disabled?: boolean
  /** Отображение только иконки без текста */
  readonly iconOnly?: boolean
  /**
   * Выбор позиции иконки. 'left' - иконка слева, 'right' - иконка справа, null - иконка скрыта
   * @default 'left'
   */
  readonly iconPos?: 'left' | 'right' | null
  /** Текст на кнопке */
  readonly label?: string
  /**
   * Выбор размера элемента
   * @default 'base'
   */
  readonly size?: 'xlarge' | 'large' | 'base' | 'small'
  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>
  /** SVG-иконка */
  readonly Icon?: SvgSource
}

/**
 * Используется для выбора нескольких значений с помощью кнопки
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-4821
 */
export const ToggleButton: FC<ToggleButtonProps> = ({
  onPress,
  checked,
  disabled,
  iconOnly: iconOnlyProp,
  iconPos = 'left',
  label,
  size = 'base',
  style,
  Icon,
  testID = ToggleButtonTestId.root,
  ...rest
}) => {
  const styles = useStyles()

  const iconOnly = iconOnlyProp || !label

  const pressedStyle = ({ pressed }: PressableStateCallbackType) => [
    styles.container,
    style,
    styles.borderContainer,
    pressed && styles.pressedBorderContainer,
    checked && styles.checkedBorderContainer,
    checked && pressed && styles.checkedPressedBorderContainer,
    disabled && styles.disabledBorderContainer,
  ]

  return (
    <Pressable
      disabled={disabled}
      style={pressedStyle}
      testID={testID}
      onPress={onPress}
      {...rest}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.contentContainer,
            styles[size],
            iconOnly && styles.iconOnly,
            pressed && styles.pressedContentContainer,
            checked && styles.checkedContentContainer,
            checked && pressed && styles.checkedPressedContentContainer,
            disabled && styles.disabledContentContainer,
          ]}
          testID={ToggleButtonTestId.container}
        >
          {iconOnly && Icon ? (
            <SvgUniversal
              color={
                StyleSheet.flatten([
                  styles.label,
                  pressed && styles.pressedLabel,
                  checked && styles.checkedLabel,
                  checked && pressed && styles.checkedPressedLabel,
                  disabled && styles.disabledLabel,
                ]).color
              }
              height={styles[`${size}Icon`].height}
              source={Icon}
              testID={ToggleButtonTestId.icon}
              width={styles[`${size}Icon`].width}
            />
          ) : (
            <>
              {iconPos === 'left' && Icon ? (
                <SvgUniversal
                  color={
                    StyleSheet.flatten([
                      styles.label,
                      pressed && styles.pressedLabel,
                      checked && styles.checkedLabel,
                      checked && pressed && styles.checkedPressedLabel,
                      disabled && styles.disabledLabel,
                    ]).color
                  }
                  height={styles[`${size}Icon`].height}
                  source={Icon}
                  testID={ToggleButtonTestId.icon}
                  width={styles[`${size}Icon`].width}
                />
              ) : null}
              <Text
                style={[
                  styles.label,
                  styles[`${size}Label`],
                  pressed && styles.pressedLabel,
                  checked && styles.checkedLabel,
                  checked && pressed && styles.checkedPressedLabel,
                  disabled && styles.disabledLabel,
                ]}
                testID={ToggleButtonTestId.text}
              >
                {label}
              </Text>
              {iconPos === 'right' && Icon ? (
                <SvgUniversal
                  color={
                    StyleSheet.flatten([
                      styles.label,
                      pressed && styles.pressedLabel,
                      checked && styles.checkedLabel,
                      checked && pressed && styles.checkedPressedLabel,
                      disabled && styles.disabledLabel,
                    ]).color
                  }
                  height={styles[`${size}Icon`].height}
                  source={Icon}
                  testID={ToggleButtonTestId.icon}
                  width={styles[`${size}Icon`].width}
                />
              ) : null}
            </>
          )}
        </View>
      )}
    </Pressable>
  )
}

const useStyles = makeStyles(
  ({ theme, spacing, border, fonts, typography }) => ({
    container: {
      alignSelf: 'flex-start',
      borderRadius: border.Radius['rounded-full'],
      borderWidth: border.Width.border,
      overflow: 'hidden',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      borderRadius: border.Radius['rounded-full'],
      paddingVertical: theme.Button.Common.buttonPaddingTopBottom,
      paddingHorizontal: spacing.Padding['p-6'],
      gap: spacing.Gap['gap-3'],
      backgroundColor: theme.Form.ToggleButton.toggleButtonBg,
    },
    pressedContentContainer: {
      backgroundColor: theme.Form.ToggleButton.toggleButtonHoverBg,
    },
    checkedContentContainer: {
      backgroundColor: theme.Form.ToggleButton.toggleButtonActiveBg,
    },
    checkedPressedContentContainer: {
      backgroundColor: theme.Form.ToggleButton.toggleButtonActiveHoverBg,
    },
    disabledContentContainer: {
      backgroundColor: theme.Button.Disabled.disabledButtonBg,
    },

    xlarge: { minHeight: theme.Button.Common.buttonHeightXL },
    large: { minHeight: theme.Button.Common.buttonHeightLG },
    base: {
      minHeight: theme.Button.Common.buttonHeight,
      paddingHorizontal: theme.Button.Common.buttonPaddingLeftRight,
      gap: theme.General.inlineSpacing,
    },
    small: {
      minHeight: theme.Button.Common.buttonHeightSM,
      paddingHorizontal: spacing.Padding['p-3'],
      gap: theme.General.inlineSpacing,
    },

    iconOnly: {
      aspectRatio: 1,
      paddingHorizontal: 0,
      paddingVertical: 0,
      justifyContent: 'center',
    },
    xlargeIcon: {
      width: typography.Size['text-4xl'],
      height: typography.Size['text-4xl'],
    },
    largeIcon: {
      width: typography.Size['text-2xl'],
      height: typography.Size['text-2xl'],
    },
    baseIcon: {
      width: typography.Size['text-xl'],
      height: typography.Size['text-xl'],
    },
    smallIcon: {
      width: typography.Size['text-base'],
      height: typography.Size['text-base'],
    },

    xlargeLabel: { fontSize: typography.Size['text-2xl'] },
    largeLabel: { fontSize: typography.Size['text-xl'] },
    baseLabel: { fontSize: typography.Size['text-base'] },
    smallLabel: { fontSize: typography.Size['text-sm'] },

    borderContainer: {
      borderColor: theme.Form.ToggleButton.toggleButtonBorderColor,
    },
    pressedBorderContainer: {
      borderColor: theme.Form.ToggleButton.toggleButtonHoverBg,
    },
    checkedBorderContainer: {
      borderColor: theme.Form.ToggleButton.toggleButtonActiveBorderColor,
    },
    checkedPressedBorderContainer: {
      borderColor: theme.Form.ToggleButton.toggleButtonActiveHoverBorderColor,
    },
    disabledBorderContainer: {
      borderColor: theme.Button.Disabled.disabledButtonBorderColor,
      opacity: 0.6,
    },

    label: {
      flexShrink: 1,
      fontFamily: fonts.primary,
      fontWeight: '600',
      includeFontPadding: false,
      verticalAlign: 'middle',
      color: theme.Form.ToggleButton.toggleButtonTextColor,
    },
    pressedLabel: { color: theme.Form.ToggleButton.toggleButtonHoverTextColor },
    checkedLabel: {
      color: theme.Form.ToggleButton.toggleButtonActiveTextColor,
    },
    checkedPressedLabel: {
      color: theme.Form.ToggleButton.toggleButtonTextActiveHoverColor,
    },
    disabledLabel: { color: theme.Button.Disabled.disabledButtonTextColor },
  })
)

export const ToggleButtonTestId = {
  root: 'ToggleButton',
  container: 'ToggleButton.container',
  text: 'ToggleButton.text',
  icon: 'ToggleButton.icon',
}
