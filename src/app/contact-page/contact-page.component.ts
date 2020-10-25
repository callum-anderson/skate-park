import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm: NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
  }

}