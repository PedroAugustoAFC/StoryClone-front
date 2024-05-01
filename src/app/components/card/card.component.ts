import { NgOptimizedImage } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements AfterViewInit {
  @ViewChild('title') titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    if (this.titleElement) {
      const titleText = this.titleElement.nativeElement.textContent;
      if(titleText){
        if (titleText?.length > 48) {
          const lastSpaceIndex = titleText.lastIndexOf(' ', 48);
        const truncatedText = lastSpaceIndex !== -1 ? titleText.substring(0, lastSpaceIndex) + '...' : titleText.substring(0, 48) + '...';
        this.titleElement.nativeElement.textContent = truncatedText;
        }
      }
    }
  }

}
