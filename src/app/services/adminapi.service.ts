import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../employee.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = 'https://employeeportal-backend.onrender.com'
//create an object for the bevioursubject
  public shareData =new BehaviorSubject(false)

  updatedata (data:any){
    this.shareData.next(data)
  }

  authorization(){
  return  this.http.get(`${this.server_URL}/employee/1`)

  }

  addEmployeeApi (employee :employee ){
   return this.http.post(`${this.server_URL}/employee` ,employee)
  }


getAllEmployeeApi(){
  return this.http.get(`${this.server_URL}/employee`)
}

deleteEmployeeApi(id:string){
  return this.http.delete(`${this.server_URL}/employee/${id}`)
}

viewEmployeeApi(id:string){
 return this.http.get(`${this.server_URL}/employee/${id}`)
}

updateEmployeeApi(id:any,employee:any){
  return this.http.put(`${this.server_URL}/employee/${id}`,employee)
 }

 updateAdminapi(admin:any){
 return this.http.put(`${this.server_URL}/employee/1`,admin)
 }

}