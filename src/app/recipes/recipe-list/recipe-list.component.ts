import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  // recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', [])

  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 
      'Very tasty', 
      'http://www.myjewishlearning.com/wp-content/uploads/2007/01/schnitzel.jpg', 
      []),
    new Recipe(
      'Summer Salad', 
      'Okayish', 
      'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
      [])     
  ];



  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
