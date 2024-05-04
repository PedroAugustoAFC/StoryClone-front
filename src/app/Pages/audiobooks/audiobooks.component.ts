import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AdsContentComponent } from '../../components/ads-content/ads-content.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeLinkComponent } from '../../components/home-link/home-link.component';
import { BooklistMainComponent } from '../../components/booklist-main/booklist-main.component';

@Component({
  selector: 'app-audiobooks',
  standalone: true,
  imports: [HeaderComponent, AdsContentComponent, HomeLinkComponent, BooklistMainComponent, FooterComponent],
  templateUrl: './audiobooks.component.html',
  styleUrl: './audiobooks.component.scss'
})
export class AudiobooksComponent {

}
