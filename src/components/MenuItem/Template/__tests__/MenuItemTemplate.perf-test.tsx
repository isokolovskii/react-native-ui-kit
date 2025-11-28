import { IconUser, IconChevronRight } from '@tabler/icons-react-native'
import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../../utils/__tests__/perf-utils'
import { MenuItemTemplate } from '../MenuItemTemplate'

describe('MenuItemTemplate performance', () => {
  test('minimal menu item', async () => {
    await measureComponentPerformance(<MenuItemTemplate title='Minimal' />)
  })

  test('menu item with icon and badge', async () => {
    await measureComponentPerformance(
      <MenuItemTemplate
        Icon={IconUser}
        badgeSeverity='warning'
        title='With Icon and Badge'
      />
    )
  })

  test('menu item with accessories', async () => {
    await measureComponentPerformance(
      <MenuItemTemplate
        PrefixIcon={IconChevronRight}
        SuffixIcon={IconChevronRight}
        title='With Accessories'
      />
    )
  })

  test('disabled menu item', async () => {
    await measureComponentPerformance(
      <MenuItemTemplate disabled title='Disabled' />
    )
  })

  test('press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByText('Pressable'))
    }

    await measureComponentPerformance(
      <MenuItemTemplate title='Pressable' onPress={jest.fn()} />,
      { scenario }
    )
  })
})
