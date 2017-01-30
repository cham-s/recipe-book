import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'ft-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Test", "This is a test description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg");
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {

  }
}