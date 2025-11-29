import type { FC } from 'react'
import { View, type ViewStyle, type StyleProp } from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'
import { Subtitle } from '../Typography'

export interface DividerProps {
  /**
   * Выбор расположения контента относительно линии.
   * В фигме вместо `start/end` используются `left/right`
   * для горизонтальной ориентации и `top/bottom` для вертикальной
   * @default 'center'
   */
  readonly align?: 'start' | 'center' | 'end'

  /**
   * Выбор ориентации компонента (горизонтальная либо вертикальная)
   * @default 'horizontal'
   */
  readonly layout?: 'horizontal' | 'vertical'

  /**
   * Показать или скрыть контейнер контента поверх линии
   * @default true
   */
  readonly showContent?: boolean

  /**
   * Показать или скрыть иконку внутри контейнера с контентом
   * @default true
   */
  readonly showIcon?: boolean

  /** Текст */
  readonly text?: string

  /**
   * Выбор стиля линии
   * @default 'solid'
   */
  readonly type?: 'solid' | 'dash'

  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>

  /** SVG-иконка */
  readonly Icon?: SvgSource
}

/**
 * Используется для визуального разделения контента
 * @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5178
 */
export const Divider: FC<DividerProps> = ({
  align = 'center',
  layout = 'horizontal',
  showContent: showContentProp = true,
  showIcon: showIconProp = true,
  text,
  type = 'solid',
  style,
  Icon,
}) => {
  const styles = useStyles()
  const isVertical = layout === 'vertical'
  const showIcon = !!(showIconProp && Icon)
  const showContent = !!(showContentProp && (showIcon || text))
  const lineStyle = [styles.line, type === 'dash' && styles.lineDash]

  return (
    <View
      style={[
        styles.container,
        isVertical && styles.containerVertical,
        showContent &&
          align === 'end' &&
          (isVertical
            ? styles.containerColumnReverse
            : styles.containerRowReverse),
        style,
      ]}
    >
      {showContent ? (
        <>
          <View
            style={[
              styles.lineContainer,
              align !== 'center' && styles.lineContainerSide,
            ]}
          >
            <View style={lineStyle} />
          </View>

          <View style={[styles.content, isVertical && styles.contentVertical]}>
            {showIcon && Icon ? (
              <SvgUniversal
                height={styles.icon.height}
                source={Icon}
                style={styles.icon}
                width={styles.icon.width}
              />
            ) : null}
            {text ? (
              <Subtitle color='secondary' style={styles.text}>
                {text}
              </Subtitle>
            ) : null}
          </View>
        </>
      ) : null}

      <View style={styles.lineContainer}>
        <View style={lineStyle} />
      </View>
    </View>
  )
}

const useStyles = makeStyles(({ spacing, theme, sizing, typography }) => ({
  container: {
    minHeight: sizing.Height['h-2'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerVertical: {
    minWidth: sizing.Width['w-2'],
    flexDirection: 'column',
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
  containerRowReverse: { flexDirection: 'row-reverse' },
  containerColumnReverse: { flexDirection: 'column-reverse' },
  lineContainer: {
    flexGrow: 1,
    flexBasis: spacing.Gap['gap-4'],
    width: 1,
    height: 1,
    overflow: 'hidden',
  },
  lineContainerSide: { flexGrow: 0 },
  line: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: theme.General.dividerColor,
  },
  lineDash: { borderStyle: 'dashed' },
  content: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.General.inlineSpacing,
    gap: spacing.Gap['gap-2'],
    backgroundColor: theme.Panel.Panel.Body.panelContentBg,
  },
  contentVertical: {
    paddingHorizontal: 0,
    paddingVertical: theme.General.inlineSpacing,
  },
  icon: {
    width: typography.Size['text-base'],
    height: typography.Size['text-base'],
    color: theme.General.textSecondaryColor,
  },
  text: { flexShrink: 1 },
}))
