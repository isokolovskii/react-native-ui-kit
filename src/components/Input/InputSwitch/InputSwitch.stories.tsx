import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { InputSwitch } from './InputSwitch'

const meta: Meta<typeof InputSwitch> = {
  title: 'Form/InputSwitch',
  args: { disabled: false, danger: false, checked: false },
  argTypes: { onCheckedChange: { action: 'onCheckedChange' } },
  render: (args) => {
    const [, updateArgs] = useArgs()

    const onCheckedChange = (nextValue: boolean) =>
      updateArgs({ checked: nextValue })

    return <InputSwitch {...args} onCheckedChange={onCheckedChange} />
  },
}

export default meta

type Story = StoryObj<typeof InputSwitch>

const InputSwitchStory: Story = {}

export { InputSwitchStory as InputSwitch }
