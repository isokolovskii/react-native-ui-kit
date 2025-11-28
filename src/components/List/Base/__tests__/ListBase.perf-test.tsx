import { IconCheck, IconList, IconUser } from '@tabler/icons-react-native'
import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../../utils/__tests__/perf-test-utils'
import { ListBase } from '../ListBase'

describe('ListBase performance', () => {
  test('minimal list item', async () => {
    await measureComponentPerformance(<ListBase text='Minimal' />)
  })

  test('maximal list item', async () => {
    await measureComponentPerformance(
      <ListBase
        LeftIcon={IconList}
        RightIcon={IconUser}
        caption='Caption'
        divider='full'
        extra={<IconCheck />}
        text='Maximal'
        title='Subtitle'
      />
    )
  })

  test('disabled list item', async () => {
    await measureComponentPerformance(<ListBase disabled text='Disabled' />)
  })

  test('press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByText('Pressable'))
    }

    await measureComponentPerformance(
      <ListBase text='Pressable' onPress={jest.fn()} />,
      { scenario }
    )
  })
})
