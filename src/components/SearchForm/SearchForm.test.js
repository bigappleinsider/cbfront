import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchForm from './index';


const handleSearch = jest.fn();
jest.useFakeTimers();



const setup = (renderShallow, handleSearch) => {
  const props = {
    handleSearch
  };

  const enzymeWrapper = renderShallow
    ? shallow(<SearchForm {...props} />)
    : mount(<SearchForm {...props} />);

  return enzymeWrapper;
};

describe('<SearchForm> component', () => {

  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = setup(false, handleSearch);
  });

  it('should render', () => {
    expect(enzymeWrapper.exists()).toBe(true);
  });

  it('form should submit on click', () => {
    enzymeWrapper.find(Button).simulate('click');
    expect(handleSearch.mock.calls.length).toBe(1);
  });

  it('form should submit on enter', () => {
    enzymeWrapper.find(TextField).first().simulate('keyDown', {keyCode: 40});
    expect(handleSearch.mock.calls.length).toBe(1);
  });

});