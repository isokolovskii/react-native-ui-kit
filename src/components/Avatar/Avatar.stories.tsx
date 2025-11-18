import type { Meta, StoryObj } from '@storybook/react'
import { IconActivity, IconUser } from '@tabler/icons-react-native'

import { Badge } from '../Badge'

import { Avatar } from './Avatar'

const Icons = { IconUser, IconActivity }

const meta: Meta<typeof Avatar> = {
  title: 'Misc/Avatar',
  component: Avatar,
  args: {
    size: 'xlarge',
    shape: 'circle',
    showBadge: false,
    badge: <Badge severity='danger'>Badge</Badge>,
    Icon: IconUser,
    source: require('./testImage.png'),
    type: 'icon',
  },
  argTypes: {
    size: { control: 'radio', options: ['normal', 'large', 'xlarge', 70, 100] },
    shape: { control: 'radio', options: ['circle', 'square'] },
    type: { control: 'radio', options: ['icon', 'label', 'image'] },
    Icon: { control: 'select', options: Object.keys(Icons), mapping: Icons },
  },
  parameters: { controls: { exclude: ['badge', 'source'] } },
}

export default meta

type Story = StoryObj<typeof Avatar>

const AvatarStory: Story = { args: { type: 'label', children: 'U' } }

export { AvatarStory as Avatar }
