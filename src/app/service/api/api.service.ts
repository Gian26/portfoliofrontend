import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../../models/email';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Injectable()
export class ApiService {

  private BASE_URL: string = environment.url;
  // response:any;
  constructor(private http: HttpClient) {}

  //send email to deep Data
  sendEmail(email:Email){
    let url: string =`${this.BASE_URL}/send_email/`;
    return this.http.post(url,email);
  }

}
