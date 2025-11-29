import {
  IconEye,
  IconEyeOff,
  IconLoader2,
  IconLock,
  IconX,
} from '@tabler/icons-react-native'
import {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type FC,
  type ReactNode,
  type Ref,
} from 'react'
import {
  TextInput,
  View,
  type TextInputFocusEventData,
  type NativeSyntheticEvent,
  TouchableOpacity,
  type ViewStyle,
  Pressable,
  type StyleProp,
  type TextInputProps,
} from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { useLoadingRotationAnimation } from '../../hooks/useLoadingRotationAnimation'

import { makeStyles } from '../../utils/makeStyles'

interface PrivateInputTextBaseProps {
  readonly inputStyle?: StyleProp<ViewStyle>
  readonly loading?: boolean
}

/** @see TextInputProps */
export interface InputTextBaseProps
  extends Omit<TextInputProps, 'style' | 'editable' | 'secureTextEntry'> {
  /**
   * Управление отображения иконки очистки поля
   * @default true
   */
  readonly clearable?: boolean
  /**
   * Управление режимом скрытия текста
   * - `true` — всегда скрывать (как в TextInput)
   * - `false` — не скрывать
   * - `"toggleable"` — скрытие управляется пользователем через кнопку-глаз
   */
  readonly secureTextEntry?: boolean | 'toggleable'
  /** Озвучка для кнопки очистки поля */
  readonly clearButtonAccessibilityLabel?: string
  /** Управление стилем контейнера поля ввода */
  readonly containerStyle?: StyleProp<ViewStyle>
  /** Управление доступностью поля */
  readonly disabled?: boolean
  /** Ref для управления полем ввода */
  readonly inputRef?: Ref<TextInput | null>
  /**
   * Функция для рендера поля ввода.
   * Используется, когда необходимо использовать отличный от стандартного компонент.
   * Например, для реализации масок
   */
  readonly renderTextInput?: (props: RenderTextInputArgs) => ReactNode
  /** Управление состоянием компонента */
  readonly state?: 'default' | 'danger'
  /**
   * Управляет видом плейсхолдера в компоненте
   * @default false
   */
  readonly floatLabel?: boolean
}

export type RenderTextInputArgs = TextInputProps & { inputRef: Ref<TextInput> }

/**
 * Базовое поле
 * @link https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5470&m=dev
 * @see InputText
 */
export const InputTextBase: FC<
  InputTextBaseProps & PrivateInputTextBaseProps
> = ({
  state,
  clearable = true,
  secureTextEntry: secureTextEntryProp = false,
  inputRef: propsInputRef,
  disabled,
  containerStyle,
  inputStyle,
  loading,
  renderTextInput,
  clearButtonAccessibilityLabel,
  floatLabel = false,
  placeholder,
  testID = InputTextBaseTestId.default,
  ...otherProps
}) => {
  const styles = useStyles()
  const inputRef = useRef<TextInput>(null)

  const [valueState, setValueState] = useState('')
  const [isFocused, setIsFocused] = useState(otherProps.autoFocus || false)
  const labelAnimation = useSharedValue(0)

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true)
    otherProps.onFocus?.(e)
  }

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false)
    otherProps.onBlur?.(e)
  }

  const onChangeText = (nextValue: string) => {
    otherProps.onChangeText?.(nextValue)
    setValueState(nextValue)
  }

  const clear = () => {
    inputRef.current?.clear()
    onChangeText('')
  }

  const value = otherProps.value ?? valueState

  const showClearButton = clearable && !!value.length

  const onContainerPress = () => {
    inputRef.current?.focus()
  }

  const loadingAnimatedStyle = useLoadingRotationAnimation(loading)

  const labelAnimatedStyle = useAnimatedStyle(() => ({
    top: interpolate(
      labelAnimation.value,
      [0, 1],
      [styles.label.top, styles.labelReducedSize.top]
    ),
    paddingVertical: interpolate(
      labelAnimation.value,
      [0, 1],
      [styles.label.paddingVertical, styles.labelReducedSize.paddingVertical]
    ),
    fontSize: interpolate(
      labelAnimation.value,
      [0, 1],
      [styles.label.fontSize, styles.labelReducedSize.fontSize]
    ),
    fontFamily:
      labelAnimation.value > 0.5
        ? styles.labelReducedSize.fontFamily
        : styles.label.fontFamily,
  }))

  useEffect(() => {
    labelAnimation.value = withTiming(isFocused || value ? 1 : 0, {
      duration: 100,
    })
  }, [isFocused, labelAnimation, value])

  const iconSize = floatLabel ? styles.iconSizeFloatLabel : styles.iconSize

  useImperativeHandle(
    propsInputRef,
    () => (inputRef.current ? inputRef.current : null) as TextInput,
    [inputRef]
  )

  const [userDefinedSecureTextEntry, setUserDefinedSecureTextEntry] =
    useState(true)
  const secureTextEntry =
    secureTextEntryProp === 'toggleable'
      ? userDefinedSecureTextEntry
      : secureTextEntryProp

  const toggleUserDefinedSecureTextEntry = () =>
    setUserDefinedSecureTextEntry((old) => !old)

  const texInputProps = {
    placeholderTextColor: styles.placeholderTextColor.color,
    ...otherProps,
    placeholder: floatLabel ? '' : placeholder,
    testID,
    editable: !disabled,
    secureTextEntry,
    style: [styles.input, floatLabel && styles.inputFloatLabel, inputStyle],
    inputRef,
    value,
    onBlur,
    onChangeText,
    onFocus,
  }

  return (
    <Pressable
      accessible={false}
      disabled={disabled}
      style={[
        styles.container,
        floatLabel && styles.containerFloatLabel,
        isFocused && styles.containerFocused,
        containerStyle,
        state === 'danger' && styles.danger,
        state === 'danger' && isFocused && styles.dangerFocused,
        disabled && styles.disabled,
      ]}
      testID={`${testID}${InputTextBaseTestId.pressableContainer}`}
      onPress={onContainerPress}
    >
      {floatLabel ? (
        <Animated.Text
          style={[styles.label, labelAnimatedStyle]}
          testID={`${testID}${InputTextBaseTestId.floatingPlaceholder}`}
        >
          {placeholder}
        </Animated.Text>
      ) : null}
      {renderTextInput ? (
        renderTextInput(texInputProps)
      ) : (
        <TextInput {...texInputProps} ref={inputRef} />
      )}

      <View style={styles.rightContainer}>
        {loading ? (
          <Animated.View
            style={loadingAnimatedStyle}
            testID={`${testID}${InputTextBaseTestId.loading}`}
          >
            <IconLoader2
              color={styles.rightIcon.color}
              height={iconSize.height}
              width={iconSize.width}
            />
          </Animated.View>
        ) : null}

        {showClearButton && !disabled ? (
          <TouchableOpacity
            accessibilityLabel={clearButtonAccessibilityLabel}
            testID={`${testID}${InputTextBaseTestId.clearButton}`}
            onPress={clear}
          >
            <IconX
              color={styles.rightIcon.color}
              height={iconSize.height}
              width={iconSize.width}
            />
          </TouchableOpacity>
        ) : null}

        {secureTextEntryProp === 'toggleable' ? (
          <TouchableOpacity
            testID={`${testID}${InputTextBaseTestId.secureInputButton}`}
            onPress={toggleUserDefinedSecureTextEntry}
          >
            {userDefinedSecureTextEntry ? (
              <IconEye
                color={styles.rightIcon.color}
                height={iconSize.height}
                width={iconSize.width}
              />
            ) : (
              <IconEyeOff
                color={styles.rightIcon.color}
                height={iconSize.height}
                width={iconSize.width}
              />
            )}
          </TouchableOpacity>
        ) : null}

        {disabled ? (
          <IconLock
            color={styles.rightIcon.color}
            height={iconSize.height}
            testID={`${testID}${InputTextBaseTestId.disabledIcon}`}
            width={iconSize.width}
          />
        ) : null}
      </View>
    </Pressable>
  )
}

const useStyles = makeStyles(
  ({ theme, border, typography, spacing, fonts }) => ({
    container: {
      minHeight: theme.Button.Common.buttonHeight,
      flexDirection: 'row',
      borderWidth: border.Width.border,
      borderRadius: border.Radius['rounded-xl'],
      borderColor: theme.Form.InputText.inputBorderColor,
      backgroundColor: theme.Form.InputText.inputBg,
      justifyContent: 'center',
    },
    containerFocused: {
      outlineColor: theme.General.focusOutlineColor,
      outlineWidth: Math.round(theme.General.focusShadowWidth),
    },
    containerFloatLabel: {
      minHeight: theme.Button.Common.buttonHeightXL,
      maxHeight: theme.Button.Common.buttonHeightXL,
      height: theme.Button.Common.buttonHeightXL,
    },
    danger: { borderColor: theme.Form.InputText.inputErrorBorderColor },
    dangerFocused: { outlineColor: theme.General.focusOutlineErrorColor },
    disabled: {
      opacity: 0.6,
      borderColor: theme.Form.InputText.inputBorderColor,
      backgroundColor: theme.Button.Disabled.disabledButtonBg,
    },
    input: {
      flex: 1,
      paddingHorizontal: theme.Form.InputText.inputPaddingLeftRight,
      fontSize: typography.Size['text-base'],
      borderRadius: border.Radius['rounded-xl'],
      color: theme.Form.InputText.inputTextColor,
      overflow: 'hidden',
      includeFontPadding: false,
      verticalAlign: 'middle',
      fontFamily: fonts.secondary,
    },
    inputFloatLabel: { paddingTop: 26, paddingBottom: 12 },
    placeholderTextColor: {
      color: theme.Form.InputText.inputPlaceholderTextColor,
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: theme.Form.InputText.inputPaddingLeftRight,
      gap: theme.Form.InputText.inputPaddingLeftRight,
      overflow: 'hidden',
    },
    rightIcon: { color: theme.Form.InputText.inputIconColor },
    iconSize: {
      width: typography.Size['text-base'],
      height: typography.Size['text-base'],
    },
    iconSizeFloatLabel: {
      width: typography.Size['text-xl'],
      height: typography.Size['text-xl'],
    },

    label: {
      position: 'absolute',
      left: 7,
      top: 19,
      paddingVertical: 0,
      paddingLeft: spacing.Padding['p-1'],
      paddingRight: spacing.Padding['p-2'],
      color: typography.Color.Common['text-color-secondary'],
      includeFontPadding: false,
      verticalAlign: 'middle',
      fontSize: typography.Size['text-base'],
      fontFamily: fonts.secondary,
    },
    labelReducedSize: {
      fontSize: typography.Size['text-sm'],
      paddingVertical: spacing.Padding['p-1'],
      top: 7,
      fontFamily: fonts.primary,
    },
  })
)

export const InputTextBaseTestId = {
  default: 'InputTextBase',
  focusOutline: 'FocusOutline',
  dangerOutline: 'DangerOutline',
  loading: 'Loading',
  clearButton: 'ClearButton',
  secureInputButton: 'SecureInputButton',
  disabledIcon: 'DisabledIcon',
  floatingPlaceholder: 'FloatingPlaceholder',
  pressableContainer: 'PressableContainer',
}
