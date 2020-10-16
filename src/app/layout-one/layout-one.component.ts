import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-one',
  templateUrl: './layout-one.component.html',
  styleUrls: ['./layout-one.component.css']
})
export class LayoutOneComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  }

}
