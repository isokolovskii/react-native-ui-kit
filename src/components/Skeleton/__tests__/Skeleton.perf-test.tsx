import { View } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Skeleton } from '../Skeleton'

describe('Skeleton performance', () => {
  test('Render with height', async () => {
    await measureComponentPerformance(<Skeleton style={{ height: 50 }} />)
  })

  test('Render with height and width', async () => {
    await measureComponentPerformance(
      <Skeleton style={{ height: 50, width: 100 }} />
    )
  })

  test('Render with borderRadius', async () => {
    await measureComponentPerformance(
      <Skeleton style={{ width: 50, height: 50, borderRadius: 50 }} />
    )
  })

  test('Render complex layout', async () => {
    await measureComponentPerformance(
      <View style={{ gap: 10 }}>
        <Skeleton style={{ height: 50 }} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Skeleton style={{ height: 50, width: 100 }} />
          <Skeleton style={{ height: 50, flex: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Skeleton style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ gap: 5, justifyContent: 'center' }}>
            <Skeleton style={{ height: 15, width: 100 }} />
            <Skeleton style={{ height: 15, width: 200 }} />
          </View>
        </View>
      </View>
    )
  })
})
