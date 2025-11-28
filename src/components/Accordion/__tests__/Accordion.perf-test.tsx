import { fireEvent, screen } from '@testing-library/react-native'
import { View } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-test-utils'
import { Accordion, AccordionTestIds } from '../Accordion'

test('Accordion toggle performance', async () => {
  const scenario = async () => {
    fireEvent(
      screen.getByTestId(AccordionTestIds.contentWrapper, {
        includeHiddenElements: true,
      }),
      'layout',
      { nativeEvent: { layout: { height: 100, width: 200, x: 0, y: 0 } } }
    )

    fireEvent.press(screen.getByText('Accordion'))
  }

  await measureComponentPerformance(
    <Accordion title='Accordion'>
      <View style={{ height: 100 }} />
    </Accordion>,
    { scenario }
  )
})
