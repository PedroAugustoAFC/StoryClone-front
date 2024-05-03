import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoryComponent } from '../../components/category/category.component';
import { AdsPageComponent } from '../../components/ads-page/ads-page.component';
import { HomeLinkComponent } from '../../components/home-link/home-link.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, AdsPageComponent, HomeLinkComponent, CategoryComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
