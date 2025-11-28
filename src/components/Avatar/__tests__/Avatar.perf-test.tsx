import { measureRenders } from 'reassure';
import { Avatar } from '../Avatar';
import { IconUser } from '@tabler/icons-react-native';

test('Avatar label performance', async () => {
  await measureRenders(<Avatar type="label" size="large" shape="circle" children="A" />);
});

test('Avatar icon performance', async () => {
  await measureRenders(<Avatar type="icon" size="large" shape="circle" Icon={IconUser} />);
});

test('Avatar image performance', async () => {
  await measureRenders(
    <Avatar
      type="image"
      size="large"
      shape="circle"
      source={require('../testImage.png')}
    />
  );
});
