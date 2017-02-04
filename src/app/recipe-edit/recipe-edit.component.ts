import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Rx";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'ft-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  private isNew = true;
  private recipe: Recipe;


  constructor(private  route: ActivatedRoute,
              private  rs: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.rs.getRecipes()[this.recipeIndex];
        } else {
          this.isNew = true;
          this.recipe = null;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean) {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray =  new FormArray([]);

    if (!this.isNew) {
      for (let i = 0; i , this.recipe.ingredient.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredient[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredient[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }
    }
  }

}
