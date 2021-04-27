import React from "react";
<<<<<<< HEAD
import  Card  from "./Card";
import recipes from '../../data/recipes';
import { shallow } from 'enzyme';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

describe("Card tests", () => {
  let component;
  let testRecipe; // define variables without values or you can pass it in as a parameter - value can be added within tests

  beforeEach(() => {

    testRecipe=recipes[0];
    component = shallow(<Card recipe={testRecipe}/>); //testing card component so we need to give it a prop called recipe - an individual object - and therefore must add to the test in order to work by passing first recipe in the array.  It has the data it would have in the actual application in our tests. 
  })
=======
import Card from "./Card";
import { shallow } from 'enzyme';
import recipes from '../../data/recipes';
import CardFront from "../CardFront";
import CardBack from "../CardBack";

describe("Card tests", () => {
  let component;
  let testRecipe;

  beforeEach(() => {
    testRecipe = recipes[0];
    component = shallow(<Card recipe={testRecipe} />);
  })

>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a
  it('should render', () => {
    expect(component).toBeTruthy();
  })

<<<<<<< HEAD
  it('should render a single CardFront component', () =>{
    expect(component.find(CardFront).length).toEqual(1);

  })
  it('should render a single CardBack component', () =>{
    expect(component.find(CardBack).length).toEqual(1);
  })

  it('should not have the faceDown class by dsefault', ()=> {
    let element = component.find('.recipeCard') //we can find classNames e.g. refers to styles.recipeCard which is the section tag. then we check if that area has a class called faceDown
    expect(element.hasClass('faceDown')).toBe(false) //we do  not want it to have a class of facedown. (element.hasClass('faceDown') evaluates to true. toBe(false) what we are testing

  }) //testing the condition that forces the card to be shown.Testing the behaviour of cardback not that the card is there.

  it('should toggle faceDown class when user clicks', () =>{
    
    expect(component.find('.recipeCard').hasClass('faceDown')).toBe(false); //should have no faceDown cards

    component.find('.recipeCard').simulate('click'); //simulate a click and get a true
    expect(component.find('.recipeCard').hasClass('faceDown')).toBe(true);

    component.find('.recipeCard').simulate('click'); //simulate another click and get a false
=======
  it("should render a CardFront component", () => {
    expect(component.find(CardFront).length).toEqual(1);
  });

  it("should render a CardBack component", () => {
    expect(component.find(CardBack).length).toEqual(1);
  });

  it("should not have the faceDown class by default", () => {
    const element = component.find(".recipeCard");
    expect(element.hasClass('faceDown')).toBe(false);
  })

  it("should toggle faceDown class when component is clicked", () => {
    expect(component.find('.recipeCard').hasClass('faceDown')).toBe(false);

    component.find('.recipeCard').simulate('click');
    expect(component.find('.recipeCard').hasClass('faceDown')).toBe(true);

    component.find('.recipeCard').simulate('click');
>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a
    expect(component.find('.recipeCard').hasClass('faceDown')).toBe(false);
  })


});
