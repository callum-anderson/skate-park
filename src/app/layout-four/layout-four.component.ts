import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-four',
  templateUrl: './layout-four.component.html',
  styleUrls: ['./layout-four.component.css']
})
export class LayoutFourComponent implements OnInit {
  @Input() placeholder;

  constructor() { }

  ngOnInit(): void {
  }

}
