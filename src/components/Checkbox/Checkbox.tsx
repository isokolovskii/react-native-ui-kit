import { IconCheck, IconMinus } from '@tabler/icons-react-native'
import type { FC } from 'react'
import {
  type AccessibilityProps,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

import { makeStyles } from '../../utils/makeStyles'

type CheckboxState = 'default' | 'danger'

export interface CheckboxProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /** Обработчик нажатия на чекбокс */
  readonly onPress: () => void
  /**
   * true, если необходим компонент в активном состоянии
   * @default false
   */
  readonly checked?: boolean
  /**
   * true, если необходим компонент в неопределенном состоянии
   * @default false
   */
  readonly indeterminate?: boolean
  /**
   * Управление доступностью компонента
   * @default false
   */
  readonly disabled?: boolean
  /** Выбор состояния компонента */
  readonly state: CheckboxState
}

/**
 * Используется для множественного выбора элементов
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5316
 */
export const Checkbox: FC<CheckboxProps> = ({
  onPress,
  checked = false,
  disabled = false,
  indeterminate = false,
  testID = 'CheckboxButton_Pressable',
  state,
}: CheckboxProps) => {
  const Icon = indeterminate ? IconMinus : checked ? IconCheck : null
  const isFilled = checked || indeterminate

  const styles = useStyles()

  return (
    <Pressable
      accessibilityRole='button'
      disabled={disabled}
      hitSlop={10}
      style={styles.container}
      testID={testID}
      onPress={onPress}
    >
      {({ pressed }) => (
        <>
          <View
            style={[
              styles.background,
              isFilled ? styles[`${state}Filled`] : styles[`${state}Clean`],
              disabled &&
                (isFilled ? styles.disabledFilled : styles.disabledClean),
              pressed && (isFilled ? styles.hoverFilled : styles.hoverClean),
            ]}
          />
          {Icon ? (
            <Icon
              height={styles.icon.height}
              style={styles.icon}
              width={styles.icon.width}
            />
          ) : null}
        </>
      )}
    </Pressable>
  )
}

const useStyles = makeStyles(({ theme, sizing, border }) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.Form.Checkbox.checkboxWidth,
    height: theme.Form.Checkbox.checkboxHeight,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: theme.Form.Checkbox.checkboxWidth,
    height: theme.Form.Checkbox.checkboxHeight,
    borderRadius: border.Radius['rounded-lg'],
    borderWidth: border.Width.border,
  },
  icon: {
    height: sizing.Height['h-1'],
    width: sizing.Width['w-1'],
    color: theme.Form.Checkbox.checkboxIconActiveColor,
  },

  defaultClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputBorderColor,
  },
  defaultFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveBg,
    borderColor: theme.Form.Checkbox.checkboxActiveBorderColor,
  },
  hoverClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputHoverBorderColor,
  },
  hoverFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveHoverBg,
    borderColor: theme.Form.Checkbox.checkboxActiveHoverBorderColor,
  },
  dangerClean: {
    backgroundColor: theme.Form.InputText.inputBg,
    borderColor: theme.Form.InputText.inputErrorBorderColor,
  },
  dangerFilled: {
    backgroundColor: theme.Form.Checkbox.checkboxActiveBg,
    borderColor: theme.Form.InputText.inputErrorBorderColor,
  },
  dangerOutline: {
    outlineStyle: 'solid',
    outlineColor: theme.General.focusOutlineErrorColor,
    outlineWidth: Math.round(theme.General.focusShadowWidth),
  },
  disabledClean: {
    backgroundColor: theme.Button.Disabled.disabledButtonBg,
    borderColor: theme.Form.InputText.inputBorderColor,
    outlineWidth: 0,
    mixBlendMode: 'luminosity',
  },
  disabledFilled: {
    borderColor: theme.Form.Checkbox.checkboxActiveBorderColor,
    opacity: 0.2,
    outlineWidth: 0,
    mixBlendMode: 'luminosity',
  },
}))
