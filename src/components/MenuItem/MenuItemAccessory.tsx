import { IconLock } from '@tabler/icons-react-native'
import { memo, useMemo } from 'react'

import { View } from 'react-native'

import { type SvgSource, SvgUniversal } from '../../utils/SvgUniversal'
import { makeStyles } from '../../utils/makeStyles'

export interface MenuItemAccessoryProps {
  /** SVG-иконка */
  readonly Icon: SvgSource
  /** Неактивное состояние. Если true, заменяет Icon на иконку замка. */
  readonly disabled?: boolean
}

/**
 * Аксессуар элемента меню. Выводится в крайней левой или крайней правой позиции пункта меню.
 */
export const MenuItemAccessory = memo<MenuItemAccessoryProps>(
  ({ Icon, disabled }) => {
    const styles = useStyles()

    const IconComponent = useMemo(
      () => (disabled ? IconLock : Icon),
      [Icon, disabled]
    )

    return (
      <View style={styles.container}>
        <SvgUniversal source={IconComponent} {...styles.icon} />
      </View>
    )
  }
)

const useStyles = makeStyles(({ theme }) => ({
  container: { justifyContent: 'center' },
  icon: {
    width: theme.Menu.Item.menuitemSubmenuIconFontSize,
    height: theme.Menu.Item.menuitemSubmenuIconFontSize,
    color: theme.Menu.Item.menuitemIconColor,
  },
}))
