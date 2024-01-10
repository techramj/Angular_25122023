import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

    ingredients:Ingredient[] = [
      new Ingredient('Patato', 100, 'grams'),
      new Ingredient('Maida', 20, 'grams'),
    ];


}
