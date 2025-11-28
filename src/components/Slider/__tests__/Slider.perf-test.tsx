import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Slider } from '../Slider'

describe('Slider performance', () => {
  test('Render single slider', async () => {
    await measureComponentPerformance(
      <Slider
        minPointerValueInit={50}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })

  test('Render range slider', async () => {
    await measureComponentPerformance(
      <Slider
        range
        maxPointerValueInit={80}
        minPointerValueInit={20}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })

  test('Render disabled slider', async () => {
    await measureComponentPerformance(
      <Slider
        disabled
        minPointerValueInit={50}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })
})
