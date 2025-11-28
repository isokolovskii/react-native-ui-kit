import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Checkbox } from '../Checkbox'

describe('Checkbox performance', () => {
  const onPress = jest.fn()

  test('unchecked', async () => {
    await measureComponentPerformance(
      <Checkbox checked={false} state='default' onPress={onPress} />
    )
  })

  test('checked', async () => {
    await measureComponentPerformance(
      <Checkbox checked state='default' onPress={onPress} />
    )
  })

  test('indeterminate', async () => {
    await measureComponentPerformance(
      <Checkbox indeterminate state='default' onPress={onPress} />
    )
  })

  test('disabled', async () => {
    await measureComponentPerformance(
      <Checkbox disabled state='default' onPress={onPress} />
    )
  })

  test('danger state', async () => {
    await measureComponentPerformance(
      <Checkbox state='danger' onPress={onPress} />
    )
  })

  test('press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByTestId('CheckboxButton_Pressable'))
    }

    await measureComponentPerformance(
      <Checkbox state='default' onPress={onPress} />,
      { scenario }
    )
  })
})
