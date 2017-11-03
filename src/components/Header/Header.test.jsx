import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

const initSearchValue = '/hello';
const handledSearchValue = 'hello';

const setup = propOverriders => {
  const props = Object.assign(
    {
      searchValue: initSearchValue,
      onSearch: jest.fn()
    },
    propOverriders
  );
  const wrapper = mount(<Header {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('Header', () => {
    it('should render Header correctly', () => {
      const { wrapper } = setup();
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find('input[type="text"]')).toHaveLength(1);
      expect(wrapper.find('input[type="text"]').props().value).toBe(handledSearchValue);
    });

    it('should render Header correctly without searchValue', () => {
      const { wrapper } = setup({ searchValue: undefined });
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find('input[type="text"]')).toHaveLength(1);
      expect(wrapper.find('input[type="text"]').props().value).toBe('');
    });

    it('should call onSearch callback', () => {
      const { wrapper, props } = setup();
      expect(props.onSearch.mock.calls.length).toBe(0);
      wrapper.find('input[type="submit"]').simulate('submit');
      expect(props.onSearch.mock.calls.length).toBe(1);
      expect(props.onSearch.mock.calls[0][0]).toBe(initSearchValue);
    });

    it('should update value and state on change', () => {
      const { wrapper } = setup();
      const newText = 'La-la Land!';
      wrapper
        .find('input[type="text"]')
        .props()
        .onChange({ target: { value: newText } });
      wrapper.update();

      expect(wrapper.find('input[type="text"]').props().value).toBe(newText);
      expect(wrapper.state().searchValue).toBe(newText);
    });

    it('should correct invalid searchValue into correct url', () => {
      const { wrapper, props } = setup();
      const invalidSearchValue = '/////////////hello////////////world//////';
      const correctedSearchValue = '/hello/world';
      wrapper
        .find('input[type="text"]')
        .props()
        .onChange({ target: { value: invalidSearchValue } });
      wrapper.update();

      expect(props.onSearch.mock.calls.length).toBe(0);
      wrapper.find('input[type="submit"]').simulate('submit');
      expect(props.onSearch.mock.calls.length).toBe(1);
      expect(props.onSearch.mock.calls[0][0]).toBe(correctedSearchValue);
    });
  });
});
