import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { ProgressSpinner, type ProgressSpinnerProps } from '../ProgressSpinner'

describe('ProgressSpinner performance', () => {
  const sizes: Array<ProgressSpinnerProps['size']> = ['sm', 'md', 'lg', 'xl']
  const fills: Array<ProgressSpinnerProps['fill']> = ['primary', 'white']

  for (const size of sizes) {
    for (const fill of fills) {
      test(`size: ${size}, fill: ${fill}`, async () => {
        await measureComponentPerformance(
          <ProgressSpinner fill={fill} size={size} />
        )
      })
    }
  }
})
