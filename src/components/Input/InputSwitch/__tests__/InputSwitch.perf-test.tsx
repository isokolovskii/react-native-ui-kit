import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../../utils/__tests__/perf-utils'
import { InputSwitch } from '../InputSwitch'

describe('InputSwitch performance', () => {
  const onCheckedChange = jest.fn()

  test('unchecked', async () => {
    await measureComponentPerformance(
      <InputSwitch checked={false} onCheckedChange={onCheckedChange} />
    )
  })

  test('checked', async () => {
    await measureComponentPerformance(
      <InputSwitch checked onCheckedChange={onCheckedChange} />
    )
  })

  test('disabled', async () => {
    await measureComponentPerformance(
      <InputSwitch disabled checked={false} onCheckedChange={onCheckedChange} />
    )
  })

  test('danger', async () => {
    await measureComponentPerformance(
      <InputSwitch danger checked={false} onCheckedChange={onCheckedChange} />
    )
  })

  test('press interaction', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByTestId('InputSwitch'))
    }

    await measureComponentPerformance(
      <InputSwitch
        checked={false}
        testID='InputSwitch'
        onCheckedChange={onCheckedChange}
      />,
      { scenario }
    )
  })
})
