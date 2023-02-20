import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-presentation-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-presentation-section.component.html',
  styleUrls: ['./menu-presentation-section.component.css']
})
export class MenuPresentationSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
