import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AdsContentComponent } from '../../components/ads-content/ads-content.component';
import { HomeLinkComponent } from '../../components/home-link/home-link.component';
import { BooklistMainComponent } from '../../components/booklist-main/booklist-main.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-ebooks',
  standalone: true,
  imports: [HeaderComponent, AdsContentComponent, HomeLinkComponent, BooklistMainComponent, FooterComponent],
  templateUrl: './ebooks.component.html',
  styleUrl: './ebooks.component.scss'
})
export class EbooksComponent {

}
