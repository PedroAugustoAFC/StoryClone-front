import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-ads',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule],
  templateUrl: './app-ads.component.html',
  styleUrl: './app-ads.component.scss'
})
export class AppAdsComponent {

}
