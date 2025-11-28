import { IconArrowDownRight } from '@tabler/icons-react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Button } from '../Button'

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
