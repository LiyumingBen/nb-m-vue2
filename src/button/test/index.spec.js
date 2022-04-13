import { mount } from '@vue/test-utils';
import Button from '..';

test('render demo button', () => {
  const wrapper = mount(Button);
  expect(wrapper).toMatchSnapshot();
});
