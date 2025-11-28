import { IconUser } from '@tabler/icons-react-native'
import { Badge } from '../../Badge'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Avatar } from '../Avatar'

describe('Avatar performance', () => {
  test('label', async () => {
    await measureComponentPerformance(
      <Avatar shape='circle' size='large' type='label'>
        A
      </Avatar>
    )
  })

  test('icon', async () => {
    await measureComponentPerformance(
      <Avatar Icon={IconUser} shape='circle' size='large' type='icon' />
    )
  })

  test('image', async () => {
    await measureComponentPerformance(
      <Avatar
        shape='circle'
        size='large'
        source={require('../testImage.png')}
        type='image'
      />
    )
  })

  test('size normal', async () => {
    await measureComponentPerformance(
      <Avatar shape='circle' size='normal' type='label'>
        A
      </Avatar>
    )
  })

  test('size large', async () => {
    await measureComponentPerformance(
      <Avatar shape='circle' size='large' type='label'>
        A
      </Avatar>
    )
  })

  test('size xlarge', async () => {
    await measureComponentPerformance(
      <Avatar shape='circle' size='xlarge' type='label'>
        A
      </Avatar>
    )
  })

  test('size custom', async () => {
    await measureComponentPerformance(
      <Avatar shape='circle' size={100} type='label'>
        A
      </Avatar>
    )
  })

  test('shape square', async () => {
    await measureComponentPerformance(
      <Avatar shape='square' size='large' type='label'>
        A
      </Avatar>
    )
  })

  test('with badge', async () => {
    await measureComponentPerformance(
      <Avatar
        badge={<Badge severity='danger'>9</Badge>}
        shape='circle'
        size='large'
        type='label'
      >
        A
      </Avatar>
    )
  })
})
