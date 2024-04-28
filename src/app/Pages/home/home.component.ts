import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovingBooklistComponent } from '../../components/moving-booklist/moving-booklist.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MovingBooklistComponent ,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
