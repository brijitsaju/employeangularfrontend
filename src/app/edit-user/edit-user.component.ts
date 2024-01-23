import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  employee:employee={}
    constructor(private route:ActivatedRoute,private api:AdminapiService,private router:Router){}
    ngOnInit(): void{
      this.route.params.subscribe((res:any)=>{
        // console.log(res.id);
        const {id}=res
        this.viewEmployee(id)
      })
    }
    viewEmployee(id:string){
      this.api.viewEmployeeApi(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.employee=res
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }


editEmployee(id:any){
  this.api.updateEmployeeApi(id,this.employee).subscribe  ({
next:(res:any)=>{
  console.log(res);
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Update Successfully',
  });  this.router.navigateByUrl('/employees')
  

},
error:(err:any)=>{
  console.log(err);
  

}
  
  })
}

Cancelbutton(id:any){
this.viewEmployee(id)
}

  }