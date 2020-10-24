import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'updates-page',
  templateUrl: './updates-page.component.html',
  styleUrls: ['./updates-page.component.css']
})
export class UpdatesPageComponent implements OnInit {
  @Input() content;
  
  constructor() { }

  ngOnInit(): void {
  }

}
