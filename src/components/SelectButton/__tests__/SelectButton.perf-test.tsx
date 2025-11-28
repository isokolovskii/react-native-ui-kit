import { fireEvent } from '@testing-library/react-native';
import { useSharedValue } from 'react-native-reanimated';

import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils';
import { SelectButton, SelectButtonProps } from '../SelectButton';

const buttons: SelectButtonProps['buttons'] = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' },
];

const sizes: SelectButtonProps['size'][] = ['small', 'base', 'large', 'xlarge'];

const SelectButtonControlled = () => {
  const position = useSharedValue(0);

  return <SelectButton buttons={buttons} position={position} />;
};

describe('SelectButton performance', () => {
  for (const size of sizes) {
    test(`Render with size: ${size}`, async () => {
      await measureComponentPerformance(
        <SelectButton buttons={buttons} size={size} />
      );
    });
  }

  test('Render disabled', async () => {
    await measureComponentPerformance(<SelectButton buttons={buttons} disabled />);
  });

  test('Interaction', async () => {
    await measureComponentPerformance(<SelectButton buttons={buttons} />, {
      scenario: async ({ getByTestId }) => {
        fireEvent.press(getByTestId('SelectButton_SelectButtonItem_1'));
        fireEvent.press(getByTestId('SelectButton_SelectButtonItem_2'));
        fireEvent.press(getByTestId('SelectButton_SelectButtonItem_0'));
      },
    });
  });

  test('Controlled', async () => {
    await measureComponentPerformance(<SelectButtonControlled />);
  });
});
