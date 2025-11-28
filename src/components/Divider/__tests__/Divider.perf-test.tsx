import { IconCircleCheck } from '@tabler/icons-react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Divider } from '../Divider'

describe('Divider performance', () => {
  test('simple horizontal divider', async () => {
    await measureComponentPerformance(<Divider />)
  })

  test('horizontal divider with text', async () => {
    await measureComponentPerformance(<Divider text='Divider Text' />)
  })

  test('horizontal divider with text and icon', async () => {
    await measureComponentPerformance(
      <Divider Icon={IconCircleCheck} text='Divider Text' />
    )
  })

  test('vertical divider', async () => {
    await measureComponentPerformance(<Divider layout='vertical' />)
  })

  test('dashed divider', async () => {
    await measureComponentPerformance(<Divider type='dash' />)
  })
})
