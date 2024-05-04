import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ads-content',
  standalone: true,
  imports: [],
  templateUrl: './ads-content.component.html',
  styleUrl: './ads-content.component.scss'
})
export class AdsContentComponent {
  @Input() pageTitle: string = '';
  @Input() pageInfo: string = '';
}
