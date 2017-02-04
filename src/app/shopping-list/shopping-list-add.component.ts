import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Ingredient} from "../ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'ft-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
})

export class ShoppingListAddComponent implements OnChanges{
  isAdd = true;
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  onSubmit(value: Ingredient) {
    const newIngredient =  new Ingredient(value.name, value.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    } else {
      this.item = new Ingredient(value.name, value.amount);
      this.sls.addItem(this.item);
    }
  }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {
        name: null,
        amount: null
      };
    } else {
      this.isAdd =  false;
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
