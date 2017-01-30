import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'ft-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }
  @Input() selectedRecipe: Recipe;
  ngOnInit() {
  }

}
