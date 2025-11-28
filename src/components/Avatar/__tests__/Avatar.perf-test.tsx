import { IconUser } from '@tabler/icons-react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Avatar } from '../Avatar'

test('Avatar label performance', async () => {
  await measureComponentPerformance(
    <Avatar shape='circle' size='large' type='label'>
      A
    </Avatar>
  )
})

test('Avatar icon performance', async () => {
  await measureComponentPerformance(
    <Avatar Icon={IconUser} shape='circle' size='large' type='icon' />
  )
})

test('Avatar image performance', async () => {
  await measureComponentPerformance(
    <Avatar
      shape='circle'
      size='large'
      source={require('../testImage.png')}
      type='image'
    />
  )
})
