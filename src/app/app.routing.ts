import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent},
    { path: 'shopping-list', component: ShoppingListComponent}
];

export const rout