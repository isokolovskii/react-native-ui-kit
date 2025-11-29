import type { FC, ReactNode } from 'react'
import { Text, Pressable, View, type ViewProps } from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface TabItemProps {
  /** SVG-иконка */
  readonly Icon?: SvgSource

  /** Текст для отображения */
  readonly label: string

  /** Компонент бейджа **/
  readonly badge?: ReactNode

  /** Индекс этой табы **/
  readonly index: number

  /** Обработчик нажатия на кнопку */
  readonly onPress: (index: number) => void

  /** Признак доступности компонента */
  readonly disabled?: boolean

  /** Признак активен ли компонент */
  readonly active?: boolean

  readonly onLayout?: ViewProps['onLayout']
}

// Часть навигационного компонента Tabs
// @see https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=888-13076&t=hIQjdrqPKK8BWYev-4
//
export const TabItem: FC<TabItemProps> = ({
  Icon,
  label,
  badge,
  index,
  onPress,
  disabled = false,
  active = false,
  onLayout,
}) => {
  const styles = useStyles()

  return (
    <Pressable
      accessibilityRole='button'
      disabled={disabled}
      testID={TestId.Container + index}
      onLayout={onLayout}
      onPress={() => onPress(index)}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            pressed && styles.pressedContainer,
            active && styles.activeContainer,
            disabled && styles.disabledContainer,
          ]}
        >
          {Icon ? (
            <SvgUniversal
              color={styles[getIconStyleName(pressed, disabled, active)].color}
              height={styles.icon.height}
              source={Icon}
              width={styles.icon.width}
            />
          ) : null}
          <Text
            numberOfLines={1}
            style={[
              styles.text,
              active && styles.activeText,
              pressed && styles.pressedText,
              disabled && styles.disabledText,
            ]}
          >
            {label}
          </Text>
          {badge}
        </View>
      )}
    </Pressable>
  )
}

const useStyles = makeStyles(({ theme, typography, fonts }) => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',

    height:
      theme.Misc.Badge.badgeHeight +
      theme.Panel.TabView.tabviewHeaderPaddingTopBottom * 2,
    gap: theme.General.inlineSpacing,
    paddingHorizontal: theme.Panel.TabView.tabviewHeaderPaddingLeftRight,
    paddingVertical: theme.Panel.TabView.tabviewHeaderPaddingTopBottom,

    backgroundColor: theme.Panel.TabView.tabviewHeaderBg,
  },
  pressedContainer: {
    backgroundColor: theme.Panel.TabView.tabviewHeaderHoverBg,
  },
  activeContainer: {
    backgroundColor: theme.Panel.TabView.tabviewHeaderActiveBg,
  },
  disabledContainer: { opacity: 0.6, mixBlendMode: 'luminosity' },
  icon: {
    width: theme.Menu.Item.menuitemSubmenuIconFontSize,
    height: theme.Menu.Item.menuitemSubmenuIconFontSize,
    color: theme.Panel.TabView.tabviewHeaderTextColor,
  },
  pressedIcon: { color: theme.Panel.TabView.tabviewHeaderHoverTextColor },
  activeIcon: { color: theme.Panel.TabView.tabviewHeaderActiveTextColor },
  disabledIcon: { color: theme.Button.Disabled.disabledButtonTextColor },
  text: {
    fontFamily: fonts.primary,
    fontSize: typography.Size['text-base'],
    verticalAlign: 'middle',
    includeFontPadding: false,

    color: theme.Panel.TabView.tabviewHeaderTextColor,
  },
  pressedText: { color: theme.Panel.TabView.tabviewHeaderHoverTextColor },
  activeText: { color: theme.Panel.TabView.tabviewHeaderActiveTextColor },
  disabledText: { color: theme.Button.Disabled.disabledButtonTextColor },
}))

export enum TestId {
  Container = 'TabItem_Container',
}

const getIconStyleName = (
  pressed: boolean,
  disabled: boolean,
  active: boolean
) => {
  if (disabled) {
    return 'disabledIcon'
  }

  if (pressed) {
    return 'pressedIcon'
  }

  if (active) {
    return 'activeIcon'
  }

  return 'icon'
}
