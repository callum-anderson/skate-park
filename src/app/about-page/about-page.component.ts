import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  @Input() content;
  
  constructor() { }

  ngOnInit(): void {
  }

}
