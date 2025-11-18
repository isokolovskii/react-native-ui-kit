import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useEffect, useState } from 'react'

import { InputText } from '../InputText'

const meta: Meta<typeof InputText> = {
  title: 'Form/InputText',
  args: {
    clearable: true,
    disabled: false,
    state: 'default',
    placeholder: 'Placeholder',
    value: '',
    floatLabel: false,
  },
  argTypes: { state: { control: 'radio', options: ['default', 'danger'] } },
  render: (args) => {
    const [, updateArgs] = useArgs()
    const [value, setValue] = useState(args.value)

    const onChangeText = useCallback(
      (nextValue: string) => {
        setValue(nextValue)
        updateArgs({ value: nextValue })
      },
      [updateArgs]
    )

    useEffect(() => {
      setValue(args.value)
    }, [args.value])

    return <InputText {...args} value={value} onChangeText={onChangeText} />
  },
}

export default meta

type Story = StoryObj<typeof InputText>

const InputTextStory: Story = {}

export { InputTextStory as InputText }
