import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-test-utils'
import { Message, TestId } from '../Message'

describe('Message performance', () => {
  const severities = ['info', 'success', 'warning', 'danger'] as const

  for (const severity of severities) {
    test(`simple message with severity ${severity}`, async () => {
      await measureComponentPerformance(
        <Message severity={severity} title='Test Message' />
      )
    })
  }

  test('message with close button', async () => {
    await measureComponentPerformance(
      <Message title='Test Message' onClose={jest.fn()} />
    )
  })

  test('message with timer', async () => {
    await measureComponentPerformance(
      <Message timerValue={10} title='Test Message' />
    )
  })

  test('close press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByTestId(TestId.CloseButton))
    }

    await measureComponentPerformance(
      <Message title='Test Message' onClose={jest.fn()} />,
      { scenario }
    )
  })
})
