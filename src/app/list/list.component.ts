import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employee } from '../employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allEmployeeget:employee[]=[]

  searchKey:string = ""
  //pagination
  p: number = 1;

 constructor(private api:AdminapiService){}

//  lifecycle hook - call just after the components is created and construted is called

ngOnInit(): void {
  this.allEmployee()
}
allEmployee(){
  this.api.getAllEmployeeApi().subscribe({
    next:(res:any)=>{

      this.allEmployeeget = res

      console.log(this.allEmployeeget);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

removeEmployee(id:any){
 this.api.deleteEmployeeApi(id).subscribe({
  next:(res:any)=>{
  console.log(res);
  this.allEmployee()
  },
  error:(err:any)=>{
    console.log(err);
    
  }
 })

}

sortId(){
  this.allEmployeeget.sort((a:any,b:any)=>a.id-b.id)
}

sortName(){
  this.allEmployeeget.sort((a:any,b:any)=>a.name.localeCompare(b.name))
}
generatePDF(){
  //create a object for jsPDF()
  const pdf = new jsPDF()

  let head=[['id','Employee name','email','status']]
  let body:any=[]
  this.allEmployeeget.forEach((item)=>{
    body.push([item.id,item.name,item.email,item.status])
  })

   // font size
  pdf.setFontSize(16)
  // title
  pdf.text('Employee Details',10,10)

  // table
  autoTable(pdf,{head,body})
  // to open in new tab
pdf.output('dataurlnewwindow')

  // save  and download
  pdf.save('employee.pdf')



}


}