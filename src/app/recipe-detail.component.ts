import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'ft-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }
  @Input() selectedRecipe: Recipe;
  ngOnInit() {
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredient);
  }

}
