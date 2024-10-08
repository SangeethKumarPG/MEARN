import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  email:string = '';
  password:string = '';
  constructor() { }
  demoAlert(){
    alert("Demo alert");
  }
}
