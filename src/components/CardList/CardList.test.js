import React from "react";
import CardList from "./CardList";
<<<<<<< HEAD
import Card from '../Card';
import {shallow} from 'enzyme';
=======
import Card from "../Card";
import { shallow } from 'enzyme';
>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a
import recipes from '../../data/recipes';

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
<<<<<<< HEAD
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
=======
    component = shallow(<CardList recipes={recipes} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should render the correct number of Card components', () => {
    const numberOfRecipes = recipes.length;
    const numberOfRenderedCards = component.find(Card).length;
    expect(numberOfRecipes).toEqual(numberOfRenderedCards);
  })
});
>>>>>>> 714a981271eca97e72f8fc59bcc4184c5436a64a
