import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moving-booklist',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './moving-booklist.component.html',
  styleUrl: './moving-booklist.component.scss'
})
export class MovingBooklistComponent {
  
}
