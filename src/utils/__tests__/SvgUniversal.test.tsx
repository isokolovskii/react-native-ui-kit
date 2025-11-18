import { IconUser } from '@tabler/icons-react-native'
import { render } from '@testing-library/react-native'

import { SvgUniversal, SvgUniversalTestId } from '../SvgUniversal'

describe('SvgUniversal', () => {
  describe('при передаче компонента в качестве источника', () => {
    test('должен отрендерить компонент', () => {
      const { getAllByTestId } = render(<SvgUniversal source={IconUser} />)

      expect(
        getAllByTestId(SvgUniversalTestId.component).length
      ).toBeGreaterThan(0)
    })
  })

  describe('при передаче uri в качестве источника', () => {
    test('рендерит компонент SvgUri', () => {
      const { getByTestId } = render(
        <SvgUniversal source={{ uri: 'https://google.com' }} />
      )

      expect(getByTestId(SvgUniversalTestId.uri)).toBeOnTheScreen()
    })
  })

  describe('при передаче XML в качестве источника', () => {
    test('рендерит компонент SvgXml', () => {
      const { getByTestId } = render(
        <SvgUniversal source={{ xml: '<svg><path d="M1 1h1v1H1z" /></svg>' }} />
      )

      expect(getByTestId(SvgUniversalTestId.xml)).toBeOnTheScreen()
    })
  })
})

jest.mock('react-native-svg', () => ({
  ...jest.requireActual('react-native-svg'),
  SvgXml: 'SvgXml',
  SvgUri: 'SvgUri',
}))
