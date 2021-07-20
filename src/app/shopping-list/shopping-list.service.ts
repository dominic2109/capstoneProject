import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Salt",10),
        new Ingredient("Chili",20)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        if(ingredient.name.trim().length>0 && ingredient.amount>0){
          this.ingredients.push(ingredient);
          this.ingredientAdded.emit(this.ingredients.slice())
        }
      }

      addIngredientsFromRecipe(ingredientsFromRecipe: Ingredient[]){
        for(let x of ingredientsFromRecipe){
          
        }
        this.ingredients.push(...ingredientsFromRecipe); //Used a spread operator to spread the ingredients array to a list of ingredients
        this.ingredientAdded.emit(this.ingredients.slice());
      }
}