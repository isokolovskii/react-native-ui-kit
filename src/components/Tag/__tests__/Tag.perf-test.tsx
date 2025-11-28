import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Tag, type TagProps } from '../Tag'

const severities: Array<TagProps['severity']> = [
  'basic',
  'info',
  'success',
  'warning',
  'danger',
  'secondary',
]

describe('Tag performance', () => {
  for (const severity of severities) {
    test(`Render with severity: ${severity}`, async () => {
      await measureComponentPerformance(
        <Tag severity={severity} text='Test Tag' />
      )
    })

    test(`Render with severity: ${severity} and rounded`, async () => {
      await measureComponentPerformance(
        <Tag rounded severity={severity} text='Test Tag' />
      )
    })
  }
})
