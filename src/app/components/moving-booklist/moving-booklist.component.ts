import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-booklist',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './moving-booklist.component.html',
  styleUrl: './moving-booklist.component.scss'
})
export class MovingBooklistComponent /*implements OnInit*/{
  /*@ViewChild('listContainerLeft') listContainerLeft!: ElementRef;
  @ViewChild('listContainerRight') listContainerRight!: ElementRef;

  scrollIntervalLeft: any;
  scrollIntervalRight: any;
  scrollStep = 1;

  constructor() {}

  ngOnInit(): void {
    this.startScrollLeft();
    this.startScrollRight();
  }

  startScrollLeft(): void {
    this.scrollIntervalLeft = setInterval(() => {
      const container = this.listContainerLeft.nativeElement;
      if (container) {
        container.scrollLeft += this.scrollStep;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          clearInterval(this.scrollIntervalLeft);
        }
      }
    }, 10);
  }

  startScrollRight(): void {
    this.scrollIntervalRight = setInterval(() => {
      const container = this.listContainerRight.nativeElement;
      if (container) {
        container.scrollLeft -= this.scrollStep;

        if (container.scrollLeft <= 0) {
          clearInterval(this.scrollIntervalRight);
        }
      }
    }, 100);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.stopScroll();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.startScrollLeft();
    this.startScrollRight();
  }

  stopScroll(): void {
    clearInterval(this.scrollIntervalLeft);
    clearInterval(this.scrollIntervalRight);
  }*/

}
