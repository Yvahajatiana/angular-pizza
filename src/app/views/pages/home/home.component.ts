import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { IntroSectionComponent } from 'src/app/shared/components/intro-section/intro-section.component';
import { AboutSectionComponent } from 'src/app/shared/components/about-section/about-section.component';
import { ServicesSectionComponent } from 'src/app/shared/components/services-section/services-section.component';
import { MenuPresentationSectionComponent } from 'src/app/shared/components/menu-presentation-section/menu-presentation-section.component';
import { GallerySectionComponent } from 'src/app/shared/components/gallery-section/gallery-section.component';
import { CounterSectionComponent } from 'src/app/shared/components/counter-section/counter-section.component';
import { MenuSectionComponent } from 'src/app/shared/components/menu-section/menu-section.component';
import { BlogArticlesSectionComponent } from 'src/app/shared/components/blog-articles-section/blog-articles-section.component';
import { ContactUsSectionComponent } from 'src/app/shared/components/contact-us-section/contact-us-section.component';
import { ScrollDirective } from 'src/app/shared/directives/scroll/scroll.directive';

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
    ContactUsSectionComponent,
    ScrollDirective
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
