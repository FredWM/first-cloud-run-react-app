import React from "react";
import SearchBar  from "./SearchBar";
import {shallow} from 'enzyme';

describe("SearchBar tests", () => {
  let component;
  let mockFn;
  let testPlaceholder = 'Test placeholder';

  beforeEach(() => {
    mockFn=jest.fn(); //mocks a function call when input happens
    component = shallow(<SearchBar placeholder={testPlaceholder} updateSearchText={mockFn}/>)
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  //it should render correct placeholder. Check whether attribute exists and then the vakue
  it('should render the correct placeholder', () => {
    component.find('span.fa').simulate('click')
    expect(component.find('input').prop('placeholder')).toBe(testPlaceholder);
  })

  //it should call the parent function on Input - if someone types something does it call a function.
  it('should call the parent function on Input', () => {
    component.find('span').simulate('click')
    component.find('input').simulate('input', {target:{value: 'Sam Input'}})
    expect(mockFn).toHaveBeenCalled();
  })


});
