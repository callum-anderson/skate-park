import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fund-page',
  templateUrl: './fund-page.component.html',
  styleUrls: ['./fund-page.component.css']
})
export class FundPageComponent implements OnInit {
  @Input() content;
  
  constructor() { }

  ngOnInit(): void {
  }

}
