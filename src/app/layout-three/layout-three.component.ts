import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-three',
  templateUrl: './layout-three.component.html',
  styleUrls: ['./layout-three.component.css']
})
export class LayoutThreeComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  }

}
