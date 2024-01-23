import { Component } from '@angular/core';
import { employee } from '../employee.model';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

employee : employee = {}

constructor(private api:AdminapiService){}

cancelEmployee(){
  this.employee = {}
}
addEmployee(){
  console.log(this.employee);
  this.api.addEmployeeApi(this.employee).subscribe({
   next:(res:employee)=>{
    console.log(res);
    alert('employee added successfully')

   } ,error:(err:any)=>{
    console.log(err);
    alert('something went wrong')
    
   }
  })
  
}

}
