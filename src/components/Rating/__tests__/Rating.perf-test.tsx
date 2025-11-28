import { fireEvent } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Rating } from '../Rating'

describe('Rating performance', () => {
  test('Render with default props', async () => {
    await measureComponentPerformance(
      <Rating rating={3} onChange={jest.fn()} onClear={jest.fn()} />
    )
  })

  test('Render with maxRating={10}', async () => {
    await measureComponentPerformance(
      <Rating
        maxRating={10}
        rating={5}
        onChange={jest.fn()}
        onClear={jest.fn()}
      />
    )
  })

  test('Render disabled', async () => {
    await measureComponentPerformance(
      <Rating disabled rating={3} onChange={jest.fn()} onClear={jest.fn()} />
    )
  })

  test('Interaction', async () => {
    await measureComponentPerformance(
      <Rating rating={3} onChange={jest.fn()} onClear={jest.fn()} />,
      {
        scenario: async ({ getByTestId }) => {
          fireEvent.press(getByTestId('RatingItem-5'))
          fireEvent.press(getByTestId('RatingItem-1'))
          fireEvent.press(getByTestId('RatingClear'))
        },
      }
    )
  })
})
