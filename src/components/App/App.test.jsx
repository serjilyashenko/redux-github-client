import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';

const setup = propOverriders => {
  const props = Object.assign(
    {
      text: 'hello',
    },
    propOverriders,
  );
  const wrapper = mount(<App {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('App', () => {
    it('should render Router', () => {
      const { wrapper } = setup();
      expect(wrapper.find(Router)).toHaveLength(1);
    });
  });
});
