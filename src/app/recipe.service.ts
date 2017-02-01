import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Tarte citron", "This is a test description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", []),
    new Recipe("Salade Mange", "This is an other recipe test description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", []),
    new Recipe("Test", "This is a test with another salad description", "https://thumb7.shutterstock.com/display_pic_with_logo/64260/288575585/stock-photo-fast-food-and-unhealthy-eating-concept-close-up-of-fast-food-snacks-and-cola-drink-on-wooden-table-288575585.jpg", [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}