import React from "react";
import CardList from "./CardList";
import Card from '../Card';
import {shallow} from 'enzyme';
import recipes from '../../data/recipes';

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardList recipes={recipes}/>)
    })

  it('should render', () => {
    expect(component).toBeTruthy();
    })

  it('should render the correct number of Card components', ()=>{
    const numberOfRecipes = recipes.length;  //recipes = array we are importing - hence what is the length of that array. A failing test would be if you specified length of array incorrectly above.
    const numberOfRenderedCards=component.find(Card).length; //looking inside of cardlist and finding the cards
    expect(numberOfRecipes).toEqual(numberOfRenderedCards)
  })  
  });
