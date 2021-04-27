import React from "react";
<<<<<<< HEAD
import SearchBar  from "./SearchBar";
import {shallow} from 'enzyme';
=======
import SearchBar from "./SearchBar";
import { shallow } from 'enzyme';
>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a

describe("SearchBar tests", () => {
  let component;
  let mockFn;
<<<<<<< HEAD
  let testPlaceholder = 'Test placeholder';

  beforeEach(() => {
    mockFn=jest.fn(); //mocks a function call when input happens
    component = shallow(<SearchBar placeholder={testPlaceholder} updateSearchText={mockFn}/>)
=======
  let testPlaceholder = "Test placeholder";

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBar placeholder={testPlaceholder} updateSearchText={mockFn} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should render the correct placeholder', () => {
    component.find('span.fa').simulate('click');
    expect(component.find('input').prop('placeholder')).toBe(testPlaceholder);
  })

  it('should call the parent function on input', () => {
    component.find('span.fa').simulate('click');
    component.find('input').simulate('input', { target: { value: 'User input' } })
    expect(mockFn).toHaveBeenCalled();
  })

  it('should call the parent function with user input', () => {
    component.find('span.fa').simulate('click');
    component.find('input').simulate('input', { target: { value: 'User input' } })
    expect(mockFn).toHaveBeenCalledWith('User input');
  })

  it('should not show the input field by default', () => {
    expect(component.find('input').length).toBe(0);
  })

  it('should toggle input rendering when FA icon is clicked', () => {
    expect(component.find('input').length).toBe(0);
    component.find('span.fa').simulate('click');
    expect(component.find('input').length).toBe(1);
    component.find('span.fa').simulate('click');
    expect(component.find('input').length).toBe(0);
>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a
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
