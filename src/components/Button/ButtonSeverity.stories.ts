import type { Meta, StoryObj } from '@storybook/react'
import {
  IconArrowDownRight,
  IconArrowDownLeft,
} from '@tabler/icons-react-native'

import { ButtonSeverity } from './ButtonSeverity'

const Icons = { IconArrowDownRight, IconArrowDownLeft, undefined }

const meta: Meta<typeof ButtonSeverity> = {
  title: 'Button/Severity',
  component: ButtonSeverity,
  args: {
    size: 'base',
    shape: 'square',
    variant: 'basic',
    label: 'Button',
    loading: false,
    disabled: false,
    iconPosition: 'prefix',
    severity: 'info',
  },
  argTypes: {
    size: { control: 'radio', options: ['small', 'base', 'large', 'xlarge'] },
    shape: { control: 'radio', options: ['square', 'circle'] },
    variant: { control: 'radio', options: ['basic', 'outlined', 'text'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconPosition: { control: 'radio', options: ['prefix', 'postfix'] },
    onPress: { action: 'OnPress' },
    severity: {
      control: 'radio',
      options: ['info', 'success', 'warning', 'danger'],
    },
    iconOnly: {
      control: 'radio',
      options: ['IconOnly', 'Not IconOnly'],
      mapping: { IconOnly: true, 'Not IconOnly': undefined },
    },
    Icon: { control: 'select', options: Object.keys(Icons), mapping: Icons },
  },
}

export default meta

type Story = StoryObj<typeof ButtonSeverity>

const ButtonStory: Story = { args: {}, argTypes: {} }

export { ButtonStory as Severity }
