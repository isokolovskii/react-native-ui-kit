import { IconUser } from '@tabler/icons-react-native'
import { render, userEvent } from '@testing-library/react-native'

import { Chip, type ChipProps, TestId } from '../Chip'

describe('Chip component tests', () => {
  const snapshotCases = generatePropsCombinations<ChipProps>({
    onClose: [jest.fn(), undefined],
    label: ['Chip'],
    Icon: [IconUser, undefined],
    showClose: [true, false],
    showIcon: [true, false],
  })

  test.each(snapshotCases)('%s', (props) => {
    const renderedChip = render(<Chip {...props} />)

    expect(renderedChip.toJSON()).toMatchSnapshot()
  })

  test('should handle tap on chip', async () => {
    const mockedOnTapChip = jest.fn()
    const { getByTestId } = render(
      <Chip label='Chip' onPress={mockedOnTapChip} />
    )
    const container = getByTestId(TestId.Container)
    const user = userEvent.setup()

    expect(mockedOnTapChip).not.toHaveBeenCalled()

    await user.press(container)

    expect(mockedOnTapChip).toHaveBeenCalledWith(expect.toBeObject())
  })

  test('should handle tap on remove button', async () => {
    const mockedOnClose = jest.fn()
    const { getByTestId } = render(
      <Chip label='Chip' onClose={mockedOnClose} />
    )
    const closeButton = getByTestId(TestId.RemoveButton)
    const user = userEvent.setup()

    expect(mockedOnClose).not.toHaveBeenCalled()

    await user.press(closeButton)

    expect(mockedOnClose).toHaveBeenCalledWith(expect.toBeObject())
  })
})
