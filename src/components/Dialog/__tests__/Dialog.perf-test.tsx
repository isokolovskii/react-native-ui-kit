import { PortalProvider } from '@gorhom/portal'
import { fireEvent, screen } from '@testing-library/react-native'
import { useState } from 'react'

import { Button, Text, View } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Dialog } from '../Dialog'
import { DialogHeader } from '../DialogHeader'

const DialogTestComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  const body = () => <Text>Dialog Body</Text>

  return (
    <PortalProvider>
      <View>
        <Button title='Show Dialog' onPress={() => setIsVisible(true)} />
        <Dialog
          body={body}
          header={
            <DialogHeader
              title='Test Dialog'
              onClose={() => setIsVisible(false)}
            />
          }
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </View>
    </PortalProvider>
  )
}

describe('Dialog performance', () => {
  test('show and hide dialog', async () => {
    const scenario = async () => {
      fireEvent.press(screen.getByText('Show Dialog'))
      await screen.findByTestId('DialogCloseButton')
      fireEvent.press(screen.getByTestId('DialogCloseButton'))
    }

    await measureComponentPerformance(<DialogTestComponent />, { scenario })
  })
})
