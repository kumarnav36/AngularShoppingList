import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Rcipe', 'This is a Test Recipe', 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/11/Pulihora-Tamarind-Rice-Recipe-Step-By-Step-Instructions.jpg?resize=750%2C683&ssl=1'),
  new Recipe('A test Rcipe 2', 'This is a Test Recipe 2', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/07/epic-summer-salad.jpg?itok=RbLJZDhs')
];
  constructor() { }

  ngOnInit() {
  }

}
