import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Tarte citron", "This is a test description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", [
      new Ingredient("Meat Love", 2),
      new Ingredient("Fish Spring", 3)
    ]),
    new Recipe("Salade Mange", "This is an other recipe test description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", []),
    new Recipe("Test", "This is a test with another salad description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
