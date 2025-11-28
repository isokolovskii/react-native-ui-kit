import { IconUser } from '@tabler/icons-react-native'
import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Chip, TestId } from '../Chip'

describe('Chip performance', () => {
  test('simple chip', async () => {
    await measureComponentPerformance(<Chip label='Simple Chip' />)
  })

  test('chip with icon', async () => {
    await measureComponentPerformance(
      <Chip Icon={IconUser} label='Chip with Icon' />
    )
  })

  test('chip with close button', async () => {
    await measureComponentPerformance(
      <Chip label='Chip with Close' onClose={jest.fn()} />
    )
  })

  test('disabled chip', async () => {
    await measureComponentPerformance(<Chip disabled label='Disabled Chip' />)
  })

  test('press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByTestId(TestId.Container))
    }

    await measureComponentPerformance(
      <Chip label='Pressable Chip' onPress={jest.fn()} />,
      { scenario }
    )
  })

  test('close press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByTestId(TestId.RemoveButton))
    }

    await measureComponentPerformance(
      <Chip label='Closable Chip' onClose={jest.fn()} />,
      { scenario }
    )
  })
})
