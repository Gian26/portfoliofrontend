import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { FormValidators } from './validators/custom-validator.directive';
import { AlertService } from './service/alert.service';
import { ApiService } from './service/api/api.service';

import { Email } from './models/email';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title: string = 'My first AGM project';
   lat: number = 20.9653526;
   lng: number = -89.661474;
   zoom:number = 13;
   validateForm: FormGroup;
   email:Email;

  STATIC_URL: string = environment.files;

   constructor(private alertService: AlertService,private apiService:ApiService, private form: FormBuilder) {
   	this.validateForm = new FormGroup({
       'name': new FormControl('', Validators.required),
       'email': new FormControl('',[Validators.required,FormValidators.vaildEmail]),
       'subject': new FormControl('', Validators.required),
       'text': new FormControl('',Validators.required),
       // 'age': new FormControl('',[Validators.required,FormValidators.age]),
       // 'address': new FormGroup({
       //   'country': new FormControl('', Validators.required),
       //   'city': new FormControl('', Validators.required)
       // })
     });
         this.email = new Email();
   }

  register(validateForm) {
     this.success('Success!!');
     console.log(this.email);

     this.apiService.sendEmail(this.email).subscribe(data=> {
          console.log("Success ",data);
          this.success('Su solicitud se a enviado, espere una respuesta muy pronto!');
          validateForm.reset();
        },(err) => {
          this.error('Un dato en el formulario esta mal.Revise el formulario.');
      });

  }
       success(message: string) {
        this.alertService.clear();
        this.alertService.success(message);
       }
       error(message:string){
         this.alertService.clear();
         this.alertService.error(message);
       }
       // error(message: string) {
       //     this.alertService.error(message);
       // }
       //
       // info(message: string) {
       //     this.alertService.info(message);
       // }
       //
       // warn(message: string) {
       //     this.alertService.warn(message);
       // }
       //
       // clear() {
       //     this.alertService.clear();
       // }
       //


}
