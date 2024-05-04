import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { AudiobooksComponent } from './Pages/audiobooks/audiobooks.component';
import { EbooksComponent } from './Pages/ebooks/ebooks.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "categories",
        component: CategoriesComponent
    },
    {
        path: "audiobooks",
        component: AudiobooksComponent
    },
    {
        path: "ebooks",
        component: EbooksComponent
    }
];
