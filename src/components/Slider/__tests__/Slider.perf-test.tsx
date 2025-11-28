import { fireEvent, screen } from '@testing-library/react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Slider } from '../Slider'

describe('Slider performance', () => {
  test('Render single slider', async () => {
    await measureComponentPerformance(
      <Slider
        minPointerValueInit={50}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })

  test('Render range slider', async () => {
    await measureComponentPerformance(
      <Slider
        range
        maxPointerValueInit={80}
        minPointerValueInit={20}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })

  test('Render disabled slider', async () => {
    await measureComponentPerformance(
      <Slider
        disabled
        minPointerValueInit={50}
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />
    )
  })

  test('Interaction - single slider drag', async () => {
    const scenario = async () => {
      const slider = screen.getByTestId('Slider')
      fireEvent(slider, 'layout', {
        nativeEvent: { layout: { width: 300, height: 20, x: 0, y: 0 } },
      })
      const minPointer = screen.getByTestId('Slider') // Assuming the whole slider is the draggable area for single
      fireEvent(minPointer, 'onGestureEvent', {
        nativeEvent: { translationX: 50, state: 2 }, // Simulate drag
      })
    }

    await measureComponentPerformance(
      <Slider
        minPointerValueInit={50}
        testID='Slider'
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />,
      { scenario }
    )
  })

  test('Interaction - range slider drag min pointer', async () => {
    const scenario = async () => {
      const slider = screen.getByTestId('Slider')
      fireEvent(slider, 'layout', {
        nativeEvent: { layout: { width: 300, height: 20, x: 0, y: 0 } },
      })
      const minPointer = screen.getByTestId('Slider') // Assuming the whole slider is the draggable area for min pointer
      fireEvent(minPointer, 'onGestureEvent', {
        nativeEvent: { translationX: 20, state: 2 }, // Simulate drag
      })
    }

    await measureComponentPerformance(
      <Slider
        range
        maxPointerValueInit={80}
        minPointerValueInit={20}
        testID='Slider'
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />,
      { scenario }
    )
  })

  test('Interaction - range slider drag max pointer', async () => {
    const scenario = async () => {
      const slider = screen.getByTestId('Slider')
      fireEvent(slider, 'layout', {
        nativeEvent: { layout: { width: 300, height: 20, x: 0, y: 0 } },
      })
      const maxPointer = screen.getByTestId('Slider')
      fireEvent(maxPointer, 'onGestureEvent', {
        nativeEvent: { translationX: -30, state: 2 }, // Simulate drag
      })
    }

    await measureComponentPerformance(
      <Slider
        range
        maxPointerValueInit={80}
        minPointerValueInit={20}
        testID='Slider'
        onMaxPointerValueChange={jest.fn()}
        onMinPointerValueChange={jest.fn()}
      />,
      { scenario }
    )
  })
})
