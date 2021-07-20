import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipes.model";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Margherita Pizza",
        "Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo",
        "assets/images/pizza.jpg",
        [
            new Ingredient("Pizza Base",1),
            new Ingredient("Pizza Sauce",1),
            new Ingredient("Cheese Slice",5)
        ]),
        new Recipe("Veggie Burger",
        "A veggie burger is a burger patty that does not contain meat. These burgers may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein.The patties that are the essence of a veggie burger have existed in various Eurasian cuisines for millennia, including in the form of disc-shaped grilled or fried meatballs or as koftas, a commonplace item in Indian cuisine.",
        "assets/images/veggie-burger.jpg",
        [
            new Ingredient("Buns",2),
            new Ingredient("lettuce",1),
            new Ingredient("sliced tomatoes",2),
            new Ingredient("sliced onions",2),
            new Ingredient("Cheese Slice",1),
            new Ingredient("Mayo",1)

        ])
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}