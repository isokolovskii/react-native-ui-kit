import { IconUser } from '@tabler/icons-react-native'
import { fireEvent } from '@testing-library/react-native'
import { useState } from 'react'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { ToggleButton, type ToggleButtonProps } from '../ToggleButton'

const sizes: Array<ToggleButtonProps['size']> = [
  'small',
  'base',
  'large',
  'xlarge',
]

const ToggleButtonWrapper = () => {
  const [checked, setChecked] = useState(false)

  return (
    <ToggleButton
      checked={checked}
      label='Toggle Me'
      onPress={() => setChecked(!checked)}
    />
  )
}

describe('ToggleButton performance', () => {
  for (const size of sizes) {
    test(`Render with size: ${size}`, async () => {
      await measureComponentPerformance(
        <ToggleButton label='Test Button' size={size} onPress={jest.fn()} />
      )
    })

    test(`Render with size: ${size} and icon`, async () => {
      await measureComponentPerformance(
        <ToggleButton
          Icon={IconUser}
          label='Test Button'
          size={size}
          onPress={jest.fn()}
        />
      )
    })

    test(`Render icon only with size: ${size}`, async () => {
      await measureComponentPerformance(
        <ToggleButton
          iconOnly
          Icon={IconUser}
          size={size}
          onPress={jest.fn()}
        />
      )
    })
  }

  test('Interaction', async () => {
    await measureComponentPerformance(<ToggleButtonWrapper />, {
      scenario: async ({ getByText }) => {
        fireEvent.press(getByText('Toggle Me'))
        fireEvent.press(getByText('Toggle Me'))
      },
    })
  })
})
