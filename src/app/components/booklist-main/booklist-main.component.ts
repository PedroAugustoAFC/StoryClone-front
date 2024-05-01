import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-booklist-main',
  standalone: true,
  imports: [MatIconModule, CardComponent],
  templateUrl: './booklist-main.component.html',
  styleUrl: './booklist-main.component.scss'
})
export class BooklistMainComponent implements OnInit, AfterViewInit{
  @ViewChild('listContainer') listContainer!: ElementRef<HTMLDivElement>;
  scrollX: number = 0;
  itemWidth: number = 176;
  items: number = 25;
  screenWidth!: number;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      console.log(window.innerWidth);
    });
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }

  handleLeftArrow(): void {
    const newPosition = this.scrollX + (this.screenWidth/2);
    this.scrollX = Math.min(0, newPosition);
  }

  handleRightArrow(): void {
    const containerWidth = this.listContainer.nativeElement.clientWidth;
    const newPosition = this.scrollX - (this.screenWidth/2);
    this.scrollX = (this.screenWidth - containerWidth) > newPosition ? (this.screenWidth - containerWidth): newPosition;
  }
}
