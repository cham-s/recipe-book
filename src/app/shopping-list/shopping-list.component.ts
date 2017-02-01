import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'ft-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }
}
