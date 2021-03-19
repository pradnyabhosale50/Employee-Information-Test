import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AllServicesService} from '../services/all-services.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
emp_id:any;
employee:any;
employeeById:any;
employes:FormGroup;
deleteEmpp:any;
employeee = [{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""},
{"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63,"profile_image":""},
{"id":3,"employee_name":"Ashton Cox","employee_salary":86000,"employee_age":66,"profile_image":""},
{"id":4,"employee_name":"Cedric Kelly","employee_salary":433060,"employee_age":22,"profile_image":""},
{"id":5,"employee_name":"Airi Satou","employee_salary":162700,"employee_age":33,"profile_image":""},
{"id":6,"employee_name":"Brielle Williamson","employee_salary":372000,"employee_age":61,"profile_image":""}];


   constructor(private allSevices:AllServicesService,private formBuilder: FormBuilder) { 
  this.fetchEmployeeData();
  }

  ngOnInit(): void {
    this.employes= this.formBuilder.group({      
      name:new FormControl(),
      salary:new FormControl( ),
      age:new FormControl()
    }
  );
  }
fetchEmployeeData() {
  const formData = new FormData();
        this.allSevices.getEmployee(formData).subscribe(
            (res: any) => {
                this.employee = res.data;
                console.log('API Responce' + JSON.stringify(this.employee));
            },

            (err: any) => {
                console.log('in error', err)
            }
        )
        }

    editEmp(emp_id){
   // this.employeeById = [{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""}];
  //  let data_1 = {"status":"success","data":{"id":7,"employee_name":"Herrod Chandler","employee_salary":137500,"employee_age":59,"profile_image":""},"message":"Successfully! Record has been fetched."};
  //  console.log(data_1.data.id);  
  //  this.employeeById = data_1.data;
  //  //emp_id = 
      const formData = new FormData();
     this.allSevices.getEmployeeById(emp_id,formData).subscribe(
       (res: any)=> {
        this.employeeById = res.data;
         console.log('API Responce' + JSON.stringify(this.employeeById));
       }
       
     )
    }

    deleteEmp(emp_id){
      const formData = new FormData();
      this.allSevices.postDeleteEmp(emp_id,formData).subscribe(
        (res: any)=> {
         this.deleteEmpp= res.data;
          console.log('API Responce' + JSON.stringify(this.deleteEmpp));
        }
        
      )
    }

    update(emp_id){
      let data = this.employes.value
     //
      const formData = new FormData();
      this.allSevices.postUpdateEmp(emp_id,data).subscribe(
        (res: any)=> {
         this.deleteEmpp= res.data;
          console.log('API Responce' + JSON.stringify(this.deleteEmpp));
        }
        
      )
    }
}
