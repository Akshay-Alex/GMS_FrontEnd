import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
    logindata = {
        "EmailAddress": "akshayalex2491@gmail.com",
        "Password": "Fedc123@ddddasds"
    };
    url = 'https://localhost:44311/api/accounts/create';
    constructor(private http: HttpClient){
        this.http.post(this.url,this.logindata, {observe: 'response'}).subscribe
        ( data => 
            {
                
                
                if(data.status == 200)
                    console.log("Success");
                
            },
            error => {
                console.log(error.error[0].description) ;
                
            });
                
            }
}

