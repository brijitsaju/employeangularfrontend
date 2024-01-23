import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminapiService } from '../services/adminapi.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = "";
  password: string = "";
  constructor(private api:AdminapiService, private router:Router){}
  
  login() {
    if (!this.email || !this.password) {
      // Use SweetAlert2 for a more stylish and customizable alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    } else {
      // Use SweetAlert2 for a success message
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You are now logged in!',
      });
      this.api.authorization().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if(email==this.email && password == this.password){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill the form completely!',
            });

            //save admin name and password
            localStorage.setItem("name",res.name)
            localStorage.setItem("pswd",res.password)



             this.router.navigateByUrl("dashboard")

          } else {
            // Use SweetAlert2 for a success message
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'You are now logged in!',
            });

            //save admin nme n pswd
            this.api.updatedata({d:true})
//navigate
this.router.navigateByUrl('dashboard')

          }

        },
        error:(res:any)=>{
console.log(res);

        }
      })
    }
  }
}

