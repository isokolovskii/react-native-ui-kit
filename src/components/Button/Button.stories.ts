import type { Meta, StoryObj } from '@storybook/react'
import {
  IconArrowDownRight,
  IconArrowDownLeft,
} from '@tabler/icons-react-native'

import { Button } from './Button'

const Icons = { IconArrowDownRight, IconArrowDownLeft, undefined }

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    size: 'base',
    shape: 'square',
    variant: 'primary',
    label: 'Button',
    loading: false,
    disabled: false,
    iconPosition: 'prefix',
  },
  argTypes: {
    size: { control: 'radio', options: ['small', 'base', 'large', 'xlarge'] },
    shape: { control: 'radio', options: ['square', 'circle'] },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'text', 'link'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconPosition: { control: 'radio', options: ['prefix', 'postfix'] },
    onPress: { action: 'OnPress' },
    iconOnly: {
      control: 'radio',
      options: ['IconOnly', 'Not IconOnly'],
      mapping: { IconOnly: true, 'Not IconOnly': undefined },
    },
    Icon: { control: 'select', options: Object.keys(Icons), mapping: Icons },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const ButtonStory: Story = { args: {}, argTypes: {} }

export { ButtonStory as Button }
