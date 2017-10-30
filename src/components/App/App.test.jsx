import React from 'react';
import { mount } from 'enzyme';
import App from './App';

const setup = propOverriders => {
  const props = Object.assign(
    {
      text: 'hello'
    },
    propOverriders
  );
  const wrapper = mount(<App {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('App', () => {
    it('should render container', () => {
      const { wrapper } = setup();
      expect(wrapper.find('.test-class_mod2')).toHaveLength(1);
    });
  });
});
