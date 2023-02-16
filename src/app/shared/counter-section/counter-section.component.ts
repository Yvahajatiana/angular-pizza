import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.css']
})
export class CounterSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
