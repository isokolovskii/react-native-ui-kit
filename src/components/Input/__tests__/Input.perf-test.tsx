import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { InputGroup } from '../InputGroup'
import { InputText } from '../InputText'

describe('Input performance', () => {
  describe('InputText', () => {
    test('simple input', async () => {
      await measureComponentPerformance(
        <InputText placeholder='Simple Input' />
      )
    })

    test('disabled input', async () => {
      await measureComponentPerformance(
        <InputText disabled placeholder='Disabled Input' />
      )
    })

    test('danger input', async () => {
      await measureComponentPerformance(
        <InputText placeholder='Danger Input' state='danger' />
      )
    })

    test('floating label input', async () => {
      await measureComponentPerformance(
        <InputText floatLabel placeholder='Floating Label' />
      )
    })

    test('typing interaction', async () => {
      const scenario = async () => {
        fireEvent.changeText(
          screen.getByPlaceholderText('Typing Test'),
          'Hello World'
        )
      }

      await measureComponentPerformance(
        <InputText placeholder='Typing Test' />,
        { scenario }
      )
    })
  })

  describe('InputGroup', () => {
    test('input with addons', async () => {
      await measureComponentPerformance(
        <InputGroup left='L' placeholder='Input with Addons' right='R' />
      )
    })
  })
})
