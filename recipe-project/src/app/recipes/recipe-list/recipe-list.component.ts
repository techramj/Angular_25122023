import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  imageDir:string = "../../../assets/images/";

  recipes:Recipe[] = [
    new Recipe("somosa", "Freid crust filled with patatoes", this.imageDir+"somosa.jpeg"),
    new Recipe("Rosagulla", "Milked based sweet, famous in bengal & north India", this.imageDir+"rosagulla.jpeg")
  ];

}
