import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.shoppingListService.addIngredientsFromRecipe(this.recipe.ingredients);
  }
}
