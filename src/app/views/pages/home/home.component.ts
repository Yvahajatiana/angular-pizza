import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { IntroSectionComponent } from 'src/app/shared/intro-section/intro-section.component';
import { AboutSectionComponent } from 'src/app/shared/about-section/about-section.component';
import { ServicesSectionComponent } from 'src/app/shared/services-section/services-section.component';
import { MenuPresentationSectionComponent } from 'src/app/shared/menu-presentation-section/menu-presentation-section.component';
import { GallerySectionComponent } from 'src/app/shared/gallery-section/gallery-section.component';
import { CounterSectionComponent } from 'src/app/shared/counter-section/counter-section.component';
import { MenuSectionComponent } from 'src/app/shared/menu-section/menu-section.component';
import { BlogArticlesSectionComponent } from '../../../shared/blog-articles-section/blog-articles-section.component';
import { ContactUsSectionComponent } from 'src/app/shared/contact-us-section/contact-us-section.component';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    CarouselComponent,
    IntroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    MenuPresentationSectionComponent,
    GallerySectionComponent,
    CounterSectionComponent,
    MenuSectionComponent,
    BlogArticlesSectionComponent,
    ContactUsSectionComponent
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
