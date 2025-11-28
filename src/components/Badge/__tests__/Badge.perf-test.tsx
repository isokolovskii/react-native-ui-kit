import { measureComponentPerformance } from '../../../utils/__tests__/perf-test-utils'
import { Badge, type BadgeSeverity } from '../Badge'

const severities: BadgeSeverity[] = [
  'basic',
  'info',
  'success',
  'warning',
  'danger',
]

describe('Badge performance', () => {
  describe('dot', () => {
    for (const severity of severities) {
      test(`severity: ${severity}`, async () => {
        await measureComponentPerformance(<Badge dot severity={severity} />)
      })
    }
  })

  describe('text', () => {
    for (const severity of severities) {
      test(`severity: ${severity}`, async () => {
        await measureComponentPerformance(<Badge severity={severity}>12</Badge>)
      })
    }
  })
})
