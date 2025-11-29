import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react-native'
import type { FC, ReactNode } from 'react'
import {
  type AccessibilityProps,
  type StyleProp,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'
import { ButtonSeverity } from '../Button/ButtonSeverity'
import { Timer } from '../Timer/Timer'
import { Body, Caption } from '../Typography'

export interface MessageProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /** Текст заголовка */
  readonly title: string

  /** Тело сообщения */
  readonly body?: ReactNode

  /** Текст подписи */
  readonly caption?: string

  /** Футер сообщения */
  readonly footer?: ReactNode

  /**
   * Обработчик нажатия на кнопку закрытия.
   * Кнопка не отображается, если обработчик не передан.
   */
  readonly onClose?: () => void

  /**
   * Текст на кнопке закрытия тоста
   * Если не указан, в кнопке отображается иконка "крестик"
   * Это свойство игнорируется если onClose = undefined
   */
  readonly closeLabel?: string

  /** Срабатывает при истечении таймера */
  readonly onTimerFinish?: () => void

  /**
   * Выбор варианта стиля компонента
   * @default 'info'
   */
  readonly severity?: 'info' | 'success' | 'warning' | 'danger'

  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>

  /** Значение таймера, если нужно отображать таймер вместо иконки */
  readonly timerValue?: number

  /**
   * SVG-иконка.
   * Дефолтные значения:
   * <pre>
   * IconInfoCircle для severity='info'
   * IconCircleCheck для severity='success'
   * IconAlertTriangle для severity='warning'
   * IconCircleX для severity='danger'
   * </pre>
   */
  readonly Icon?: SvgSource

  /**
   * Скрыть иконку.
   * Позволяет скрывать установленные или дефолтные иконки
   * Дефолтное значение: false
   */
  readonly hiddenIcon?: boolean
}

const iconMap = {
  info: IconInfoCircle,
  success: IconCircleCheck,
  warning: IconAlertTriangle,
  danger: IconAlertCircle,
}

/**
 * Унифицированный компонент, который используется для отображения информационных сообщений
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=562-2947
 */
export const Message: FC<MessageProps> = ({
  title,
  body,
  caption,
  footer,
  onClose,
  closeLabel,
  onTimerFinish,
  severity = 'info',
  hiddenIcon = false,
  style,
  testID = TestId.Container,
  timerValue,
  Icon: IconProp,
  ...rest
}) => {
  const styles = useStyles()
  const Icon = IconProp || iconMap[severity]

  return (
    <View
      accessible
      style={[styles.container, styles[severity], style]}
      testID={testID}
      {...rest}
    >
      <View style={[styles.content, styles[`content${severity}`]]}>
        <View style={styles.titleRow}>
          {timerValue ? (
            <Timer countFrom={timerValue} onFinish={onTimerFinish} />
          ) : null}
          {!timerValue && !hiddenIcon && (
            <SvgUniversal
              color={styles[`content${severity}`].borderColor}
              height={styles.iconSize.height}
              source={Icon}
              testID={TestId.Icon}
              width={styles.iconSize.width}
            />
          )}
          <View style={styles.titleTextContainer}>
            <Body base testID={TestId.Title} weight='bold'>
              {title}
            </Body>
            {caption ? (
              <Caption testID={TestId.Caption}>{caption}</Caption>
            ) : null}
          </View>
          {onClose ? (
            closeLabel ? (
              <ButtonSeverity
                label={closeLabel}
                severity={severity}
                size='small'
                testID={TestId.CloseButton}
                variant='outlined'
                onPress={onClose}
              />
            ) : (
              <ButtonSeverity
                iconOnly
                Icon={IconX}
                severity={severity}
                size='small'
                testID={TestId.CloseButton}
                variant='outlined'
                onPress={onClose}
              />
            )
          ) : null}
        </View>
        {body ? <View testID={TestId.Body}>{body}</View> : null}
        {footer}
      </View>
    </View>
  )
}

const useStyles = makeStyles(({ theme, typography, spacing, border }) => ({
  container: {
    borderRadius: theme.General.borderRadiusXL,
    borderWidth: border.Width.border,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    borderLeftWidth: border.Width['border-3'] - border.Width.border,
    padding: spacing.Padding['p-4'],
    paddingLeft: spacing.Padding['p-5'],
    gap: spacing.Gap['gap-4'],
  },
  info: {
    borderColor: theme.Message.Severities.Info.infoMessageBorderColor,
    backgroundColor: theme.Message.Severities.Info.infoMessageBg,
  },
  contentinfo: {
    borderColor: theme.Message.Severities.Info.infoMessageIconColor,
  },
  success: {
    borderColor: theme.Message.Severities.Success.successMessageBorderColor,
    backgroundColor: theme.Message.Severities.Success.successMessageBg,
  },
  contentsuccess: {
    borderColor: theme.Message.Severities.Success.successMessageIconColor,
  },
  warning: {
    borderColor: theme.Message.Severities.Warning.warningMessageBorderColor,
    backgroundColor: theme.Message.Severities.Warning.warningMessageBg,
  },
  contentwarning: {
    borderColor: theme.Message.Severities.Warning.warningMessageIconColor,
  },
  danger: {
    borderColor: theme.Message.Severities.Danger.dangerMessageBorderColor,
    backgroundColor: theme.Message.Severities.Danger.dangerMessageBg,
  },
  contentdanger: {
    borderColor: theme.Message.Severities.Danger.dangerMessageIconColor,
  },
  titleRow: { flexDirection: 'row', gap: spacing.Gap['gap-4'] },
  titleTextContainer: {
    flex: 1,
    alignSelf: 'center',
    gap: spacing.Gap['gap-1'],
  },
  iconSize: {
    width: typography.Size['text-4xl'],
    height: typography.Size['text-4xl'],
  },
}))

export enum TestId {
  Container = 'MessageContainer',
  CloseButton = 'CloseButton',
  Title = 'Title',
  Caption = 'Caption',
  Body = 'Body',
  Icon = 'Icon',
}
