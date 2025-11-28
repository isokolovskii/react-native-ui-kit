import { fireEvent, screen } from '@testing-library/react-native'
import { useState } from 'react'
import { View, Button } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-test-utils'
import { ProgressBar } from '../ProgressBar'

describe('ProgressBar performance', () => {
  test('simple progress bar', async () => {
    await measureComponentPerformance(<ProgressBar value={50} />)
  })

  test('progress bar with value', async () => {
    await measureComponentPerformance(<ProgressBar showValue value={50} />)
  })

  test('progress change animation', async () => {
    const ProgressBarTestComponent = () => {
      const [value, setValue] = useState(20)

      return (
        <View>
          <ProgressBar value={value} />
          <Button title='Update' onPress={() => setValue(80)} />
        </View>
      )
    }

    const scenario = async () => {
      fireEvent.press(screen.getByText('Update'))
    }

    await measureComponentPerformance(<ProgressBarTestComponent />, {
      scenario,
    })
  })
})
