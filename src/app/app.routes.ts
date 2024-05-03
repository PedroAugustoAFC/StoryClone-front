import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CategoriesComponent } from './Pages/categories/categories.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "categories",
        component: CategoriesComponent
    }
];
