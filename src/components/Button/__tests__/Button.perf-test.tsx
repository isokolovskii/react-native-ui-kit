import { IconArrowDownRight } from '@tabler/icons-react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Button } from '../Button'
import { ButtonBadge } from '../ButtonBadge'
import { ButtonSeverity } from '../ButtonSeverity'

describe('Button performance', () => {
  test('primary button', async () => {
    await measureComponentPerformance(
      <Button label='Primary Button' variant='primary' />
    )
  })

  test('button with icon', async () => {
    await measureComponentPerformance(
      <Button
        Icon={IconArrowDownRight}
        label='Button with Icon'
        variant='primary'
      />
    )
  })

  test('disabled button', async () => {
    await measureComponentPerformance(
      <Button disabled label='Disabled Button' variant='primary' />
    )
  })

  test('loading button', async () => {
    await measureComponentPerformance(
      <Button loading label='Loading Button' variant='primary' />
    )
  })
})

describe('ButtonBadge performance', () => {
  test('with text badge', async () => {
    await measureComponentPerformance(
      <ButtonBadge
        badgeLabel='99+'
        badgeSeverity='danger'
        label='Badge Button'
        variant='primary'
      />
    )
  })

  test('with dot badge', async () => {
    await measureComponentPerformance(
      <ButtonBadge
        badgeSeverity='danger'
        label='Badge Button'
        variant='primary'
      />
    )
  })
})

describe('ButtonSeverity performance', () => {
  const severities = ['info', 'success', 'warning', 'danger'] as const

  for (const severity of severities) {
    test(`severity: ${severity}`, async () => {
      await measureComponentPerformance(
        <ButtonSeverity label={`${severity} Button`} severity={severity} />
      )
    })
  }
})
