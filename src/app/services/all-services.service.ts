import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BaseServiceService} from './base-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private httpService: BaseServiceService, private router: Router) { }

  getEmployee(getData: any): Observable<any> { // get login types
    return this.httpService.get('/employees', getData);
}
getEmployeeById(emp_id,getData: any): Observable<any> { // get login types
  return this.httpService.get('/employee/'+emp_id, getData);
}
postDeleteEmp(emp_id,postData:any):Observable<any>{
  return this.httpService.delete('/delete/'+emp_id ,postData);
}
postUpdateEmp(emp_id,postData:any):Observable<any>{
  return this.httpService.put('/update/'+emp_id ,postData);
}


}
