import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-articles-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-articles-section.component.html',
  styleUrls: ['./blog-articles-section.component.css']
})
export class BlogArticlesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
