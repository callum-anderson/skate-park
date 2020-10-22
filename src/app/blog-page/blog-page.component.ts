import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  @Input() content;
  
  constructor() { }

  ngOnInit(): void {
  }

}
