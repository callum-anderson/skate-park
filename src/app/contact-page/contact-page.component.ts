import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm: NgForm;
  formValues;
  formSubmitStatus = 'default';
  recaptchaKey = '6Lcde-oZAAAAAHIiywzN03LgtmoCciE8cCiNCFrh';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onSubmit(form){
    this.formValues = form.value;
    this.formSubmitStatus = 'pending';
    const formValue = JSON.stringify(this.formValues);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.http.post('https://prod-20.ukwest.logic.azure.com:443/workflows/9f85b9a3c4e24307b085f72a088a5128/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=94Qm8UPxDzWoRbJx6ZTAa6xAY4ewKkKMZp0gFDPk2AE', 
          formValue, {headers: headers})
      .subscribe(res => {
          this.formSubmitStatus = 'submitted';
        },
        err => {
          this.formSubmitStatus = (err.status == 200) ? 'submitted' : 'error';
        });
  }
}