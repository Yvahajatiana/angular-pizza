import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.css']
})
export class ContactUsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
