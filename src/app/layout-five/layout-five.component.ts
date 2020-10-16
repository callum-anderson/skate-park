import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-five',
  templateUrl: './layout-five.component.html',
  styleUrls: ['./layout-five.component.css']
})
export class LayoutFiveComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  }

}
