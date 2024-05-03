import { Component } from '@angular/core';
import { AdsContentComponent } from '../ads-content/ads-content.component';

@Component({
  selector: 'app-ads-page',
  standalone: true,
  imports: [AdsContentComponent],
  templateUrl: './ads-page.component.html',
  styleUrl: './ads-page.component.scss'
})
export class AdsPageComponent {

}
