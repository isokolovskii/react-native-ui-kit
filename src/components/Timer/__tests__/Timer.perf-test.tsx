import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Timer } from '../Timer'

describe('Timer performance', () => {
  test('Render with countFrom={10}', async () => {
    await measureComponentPerformance(
      <Timer countFrom={10} onFinish={jest.fn()} />
    )
  })

  test('Render with countFrom={30}', async () => {
    await measureComponentPerformance(
      <Timer countFrom={30} onFinish={jest.fn()} />
    )
  })
})
