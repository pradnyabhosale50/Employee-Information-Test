import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private http:HttpClient) { }

  post(serviceName: string, data: any) {
    /* const headers = new HttpHeaders(); */
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, REQUEST');
    headers.append('Content-Type', 'application/json');
    const options = { headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, data, options);
    }

    get(serviceName: string,data:any) {
      // const headers = new HttpHeaders();
      // const options = { headers: headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
      return this.http.get(url,data);
    }

    delete(serviceName: string,data:any) {
      // const headers = new HttpHeaders();
      // const options = { headers: headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
      return this.http.delete(url,data);
    }

    put(serviceName: string, data: any) {
      /* const headers = new HttpHeaders(); */
      const headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, REQUEST');
      headers.append('Content-Type', 'application/json');
      const options = { headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
      return this.http.put(url, data, options);
      }
    
}
