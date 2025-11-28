import { measureRenders } from 'reassure'

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
        await measureRenders(<Badge dot severity={severity} />)
      })
    }
  })

  describe('text', () => {
    for (const severity of severities) {
      test(`severity: ${severity}`, async () => {
        await measureRenders(<Badge severity={severity}>12</Badge>)
      })
    }
  })
})
