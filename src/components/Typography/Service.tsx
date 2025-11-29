import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconHelpCircle,
  IconInfoCircle,
} from '@tabler/icons-react-native'
import type { FC } from 'react'
import { Text, View, type TextProps } from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface ServiceProps extends TextProps {
  /**
   * Вариант отображения
   * @default success
   */
  readonly variant?: 'danger' | 'warning' | 'success' | 'info' | 'help'
  /**
   * true, если необходимо показать иконку
   * @default false
   */
  readonly showIcon?: boolean
  /**
   * true, если необходим компонент в базовом стиле
   * @default false
   */
  readonly base?: boolean
  /** SVG-иконка */
  readonly Icon?: SvgSource
}

const iconMap = {
  danger: IconCircleX,
  warning: IconAlertTriangle,
  success: IconCircleCheck,
  info: IconInfoCircle,
  help: IconHelpCircle,
}

/**
 * @see https://www.figma.com/design/2ZnL6XPKEpxAHvrlbRvnMu/Template-Tailwind-CSS-(DS)?node-id=1-284&m=dev
 */
export const Service: FC<ServiceProps> = ({
  variant = 'success',
  showIcon = true,
  base = true,
  Icon: IconFromProps,
  ...other
}) => {
  const styles = useStyles()

  const variantStyle = styles[variant] || styles.info
  const iconSize = base ? styles.iconBase : styles.icon

  return (
    <View style={base ? styles.containerBase : styles.container}>
      {showIcon ? (
        <SvgUniversal
          color={variantStyle.color}
          height={iconSize.height}
          source={IconFromProps || iconMap[variant] || IconInfoCircle}
          width={iconSize.width}
        />
      ) : null}
      <Text
        style={[
          styles.textCommon,
          base ? styles.textBase : styles.text,
          variantStyle,
        ]}
        {...other}
      />
    </View>
  )
}

const useStyles = makeStyles(({ typography, spacing, fonts }) => ({
  iconBase: {
    width: typography.Size['text-xl'],
    height: typography.Size['text-xl'],
  },
  icon: {
    width: typography.Size['text-base'],
    height: typography.Size['text-base'],
  },

  containerBase: { flexDirection: 'row', gap: spacing.Gap['gap-2'] },
  container: { flexDirection: 'row', gap: spacing.Gap['gap-1'] },

  textCommon: {
    includeFontPadding: false,
    verticalAlign: 'middle',
    flexShrink: 1,
    fontWeight: 400,
  },
  textBase: {
    fontSize: typography.Size['text-base'],
    fontFamily: fonts.secondary,
  },
  text: { fontSize: typography.Size['text-sm'], fontFamily: fonts.primary },

  warning: { color: typography.Color.Service['text-warning'] },
  success: { color: typography.Color.Service['text-success'] },
  info: { color: typography.Color.Service['text-info'] },
  help: { color: typography.Color.Service['text-help'] },
  danger: { color: typography.Color.Service['text-danger'] },
}))
