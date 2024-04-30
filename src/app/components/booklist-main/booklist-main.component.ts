import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-booklist-main',
  standalone: true,
  imports: [MatIconModule, CardComponent],
  templateUrl: './booklist-main.component.html',
  styleUrl: './booklist-main.component.scss'
})
export class BooklistMainComponent {

}
