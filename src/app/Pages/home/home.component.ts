import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovingBooklistComponent } from '../../components/moving-booklist/moving-booklist.component';
import { AppAdsComponent } from '../../components/app-ads/app-ads.component';
import { BooklistMainComponent } from '../../components/booklist-main/booklist-main.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MovingBooklistComponent, 
    FooterComponent, 
    AppAdsComponent,
    BooklistMainComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
