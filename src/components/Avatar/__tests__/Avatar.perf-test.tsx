import { IconUser } from '@tabler/icons-react-native'
import { measureRenders } from 'reassure'

import { Avatar } from '../Avatar'

test('Avatar label performance', async () => {
  await measureRenders(
    <Avatar shape='circle' size='large' type='label'>
      A
    </Avatar>
  )
})

test('Avatar icon performance', async () => {
  await measureRenders(
    <Avatar Icon={IconUser} shape='circle' size='large' type='icon' />
  )
})

test('Avatar image performance', async () => {
  await measureRenders(
    <Avatar
      shape='circle'
      size='large'
      source={require('../testImage.png')}
      type='image'
    />
  )
})
