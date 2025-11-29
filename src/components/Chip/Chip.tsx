import { IconX } from '@tabler/icons-react-native'
import type { FC } from 'react'
import { Text, Pressable, type PressableProps } from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface ChipProps extends PressableProps {
  /** SVG-иконка */
  readonly Icon?: SvgSource
  /** Текст для отображения */
  readonly label: string
  /**
   * Показывать или скрыть кнопку для скрытия компонента
   * @default true если onClose задан, иначе false
   */
  readonly showClose?: boolean
  /**
   * Показывать или скрыть иконку внутри компонента
   * @default true
   */
  readonly showIcon?: boolean
  /** Обработчик нажатия на кнопку скрытия компонента */
  readonly onClose?: () => void
}

/**
 * Компонет Нажимабельного тега с возможностью закрытия
 * Используется для представления массива данных в виде меток
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5126&t=jMMaE0JO924pG1ga-4
 */
export const Chip: FC<ChipProps> = ({
  Icon,
  label,
  disabled,
  testID = TestId.Container,
  onClose,
  showClose = !!onClose,
  showIcon = true,
  ...rest
}) => {
  const styles = useStyles()

  return (
    <Pressable
      {...rest}
      disabled={disabled}
      style={[styles.chip, disabled && styles.disabledChip]}
      testID={testID}
    >
      {showIcon && Icon ? (
        <SvgUniversal
          color={disabled ? styles.disabledIcon.color : styles.icon.color}
          height={styles.icon.height}
          source={Icon}
          width={styles.icon.width}
        />
      ) : null}

      <Text
        numberOfLines={1}
        style={[styles.text, disabled && styles.disabledText]}
      >
        {label}
      </Text>

      {showClose ? (
        <Pressable
          disabled={disabled}
          testID={TestId.RemoveButton}
          onPress={onClose}
        >
          {({ pressed }) => (
            <IconX
              color={disabled ? styles.disabledIcon.color : styles.icon.color}
              height={styles.icon.height}
              style={pressed ? styles.pressedClose : null}
              width={styles.icon.width}
            />
          )}
        </Pressable>
      ) : null}
    </Pressable>
  )
}

const useStyles = makeStyles(({ theme, typography, border, fonts }) => ({
  chip: {
    height: theme.Misc.Chip.chipHeight,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.General.inlineSpacing,

    paddingHorizontal: theme.Misc.Chip.chipPaddingLeftRight,
    paddingVertical: theme.Misc.Chip.chipPaddingTopBottom,

    borderRadius: theme.Misc.Chip.chipBorderRadius,
    borderWidth: border.Width.border,

    backgroundColor: theme.Misc.Chip.chipBg,
    borderColor: theme.Misc.Chip.chipBorderColor,
  },
  disabledChip: {
    backgroundColor: theme.Button.Disabled.disabledButtonBg,
    borderColor: theme.Button.Disabled.disabledButtonBorderColor,
    opacity: 0.6,
    mixBlendMode: 'luminosity',
  },
  icon: {
    width: typography.Size['text-base'],
    height: typography.Size['text-base'],
    color: theme.Misc.Chip.chipTextColor,
  },
  disabledIcon: { color: theme.Button.Disabled.disabledButtonTextColor },
  text: {
    fontSize: typography.Size['text-base'],
    verticalAlign: 'middle',
    color: theme.Misc.Chip.chipTextColor,
    includeFontPadding: false,
    fontFamily: fonts.secondary,
  },
  disabledText: { color: theme.General.textSecondaryColor },
  pressedClose: {
    borderWidth: border.Width['border-3'],
    borderColor: border.Color.Service['border-success'][400],
    borderRadius: border.Radius['rounded-full'],
  },
}))

export enum TestId {
  Container = 'Chip_Container',
  RemoveButton = 'Chip_RemoveButton',
}
