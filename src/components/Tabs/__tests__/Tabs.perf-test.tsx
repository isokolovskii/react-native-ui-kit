import { fireEvent } from '@testing-library/react-native'
import { useState } from 'react'

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Tabs } from '../Tabs'

const items = [
  { label: 'First', key: '1' },
  { label: 'Second Tab', key: '2' },
  { label: 'Long Third Tab', key: '3' },
]

const TabsWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Tabs activeIndex={activeIndex} items={items} onChange={setActiveIndex} />
  )
}

describe('Tabs performance', () => {
  test('Render with 3 tabs', async () => {
    await measureComponentPerformance(
      <Tabs activeIndex={0} items={items} onChange={jest.fn()} />
    )
  })

  test('Render with 5 tabs', async () => {
    const fiveItems = [
      ...items,
      { label: 'Fourth Tab', key: '4' },
      { label: 'Fifth Tab', key: '5' },
    ]
    await measureComponentPerformance(
      <Tabs activeIndex={0} items={fiveItems} onChange={jest.fn()} />
    )
  })

  test('Interaction', async () => {
    await measureComponentPerformance(<TabsWrapper />, {
      scenario: async ({ getByText }) => {
        fireEvent.press(getByText('Second Tab'))
        fireEvent.press(getByText('Long Third Tab'))
        fireEvent.press(getByText('First'))
      },
    })
  })
})
