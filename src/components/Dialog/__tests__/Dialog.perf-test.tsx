import { PortalProvider } from '@gorhom/portal'
import { fireEvent, screen } from '@testing-library/react-native'
import { useState } from 'react'

import { Button, Text, View } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Dialog } from '../Dialog'
import { DialogHeader } from '../DialogHeader'

const DialogTestComponent = ({
  withFooter = false,
  severity,
}: {
  readonly withFooter?: boolean
  readonly severity?: 'info' | 'success' | 'warning' | 'danger' | 'help'
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const body = () => <Text>Dialog Body</Text>
  const footer = withFooter ? () => <Text>Dialog Footer</Text> : undefined

  return (
    <PortalProvider>
      <View>
        <Button title='Show Dialog' onPress={() => setIsVisible(true)} />
        <Dialog
          body={body}
          footer={footer}
          header={
            <DialogHeader
              severity={severity}
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

  test('initial render with header and body', async () => {
    await measureComponentPerformance(<DialogTestComponent />)
  })

  test('initial render with header, body, and footer', async () => {
    await measureComponentPerformance(<DialogTestComponent withFooter />)
  })

  const severities = ['info', 'success', 'warning', 'danger', 'help'] as const

  for (const severity of severities) {
    test(`initial render with severity: ${severity}`, async () => {
      await measureComponentPerformance(
        <DialogTestComponent severity={severity} />
      )
    })
  }
})
