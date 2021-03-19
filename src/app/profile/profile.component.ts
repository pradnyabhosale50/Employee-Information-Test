import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username:any;
email:any;
gender:any;
users:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.username= localStorage.getItem('username');
    this.email =localStorage.getItem('email');
    this.gender =localStorage.getItem('gender');
    this.users= this.formBuilder.group({      
      name:new FormControl(),
      email:new FormControl( ),
      gender:new FormControl()
    }
  );
  }

  updateUser(){
    this.users.value.name= localStorage.setItem('username',this.users.value.name);
    this.users.value.email= localStorage.setItem('email',this.users.value.email);
    this.users.value.gender= localStorage.setItem('gender',this.users.value.gender);
    this.ngOnInit();
  }
}
