import { fireEvent } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { RadioButton, type RadioButtonProps } from '../RadioButton'

const states: Array<RadioButtonProps['state']> = ['default', 'danger']
const checkedStates: boolean[] = [true, false]
const disabledStates: boolean[] = [true, false]

describe('RadioButton performance', () => {
  for (const state of states) {
    for (const checked of checkedStates) {
      for (const disabled of disabledStates) {
        test(`state: ${state}, checked: ${checked}, disabled: ${disabled}`, async () => {
          await measureComponentPerformance(
            <RadioButton
              checked={checked}
              disabled={disabled}
              state={state}
              onPress={jest.fn()}
            />
          )
        })
      }
    }
  }

  test('Interaction', async () => {
    await measureComponentPerformance(
      <RadioButton testID='RadioButton' onPress={jest.fn()} />,
      {
        scenario: async ({ getByTestId }) => {
          fireEvent.press(getByTestId('RadioButton'))
        },
      }
    )
  })
})
