import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-two',
  templateUrl: './layout-two.component.html',
  styleUrls: ['./layout-two.component.css']
})
export class LayoutTwoComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  }

}
