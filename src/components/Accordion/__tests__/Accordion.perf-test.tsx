import { IconUser, IconDiamond } from '@tabler/icons-react-native'
import { fireEvent, screen } from '@testing-library/react-native'
import { View } from 'react-native'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Accordion, AccordionTestIds } from '../Accordion'

describe('Accordion performance', () => {
  test('initial render (collapsed)', async () => {
    await measureComponentPerformance(
      <Accordion title='Accordion'>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('initial render (expanded)', async () => {
    await measureComponentPerformance(
      <Accordion isInitiallyExpanded title='Accordion'>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('initial render with Icon', async () => {
    await measureComponentPerformance(
      <Accordion Icon={IconUser} title='Accordion'>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('initial render with titleExtra', async () => {
    await measureComponentPerformance(
      <Accordion title='Accordion' titleExtra={<IconDiamond />}>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('initial render with withSeparator', async () => {
    await measureComponentPerformance(
      <Accordion withSeparator title='Accordion'>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('initial render when disabled', async () => {
    await measureComponentPerformance(
      <Accordion disabled title='Accordion'>
        <View style={{ height: 100 }} />
      </Accordion>
    )
  })

  test('toggle performance', async () => {
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
})
