import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
