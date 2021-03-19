import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  registration:FormGroup;
  submitted = false;
  skills:any=[];
  userLogin={email:'samcom@gmail.com',pass:'123'};
  userLogin2={email:'samcomTechnobrains@gmail.com',pass:'sam123@'};

  checkboxesDataList = [
    {
      id: '1',
      label: 'Ionic',
      isChecked: true
    },
    {
      id: '2',
      label: 'Angular',
      isChecked: true
    },
    {
      id: '3',
      label: 'PHP',
      isChecked: true
    },
    {
      id: '4',
      label: 'Jquery',
      isChecked: false
    },
  ]
  constructor( private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.login= this.formBuilder.group({      
      email:new FormControl('',[Validators.required ]),
      pass:new FormControl('',[Validators.required ])
    }
  );

  this.registration= this.formBuilder.group({      
    username:new FormControl('',[Validators.required ]),
    regpass:new FormControl('',[Validators.required ]),
    resEmail:new FormControl('',[Validators.required ]),
    gender: new FormControl('', [Validators.required]),
    skillCheck:new FormControl()
  }
);
  }

  get f3() { return this.login.controls; }
  get f4() { return this.registration.controls; }
  onLogin() {
    this.submitted = true;
    //if data invalid then show error
    if (this.login.invalid) {
        return ;
    }

    if(this.login.value.email==this.userLogin.email && this.login.value.pass==this.userLogin.pass){
      this.route.navigate(['home']);
    }else if(this.login.value.email==this.userLogin2.email && this.login.value.pass==this.userLogin2.pass)
   {
    this.route.navigate(['home']);
   } 
   else{
     window.alert("incorrect email or password");
   }
}

onSignup(){
  this.submitted = true;
  let data:any = [];
  //if data invalid then show error
  if (this.registration.invalid) {
      return ;
  }
  data.push(this.registration.value);
  data.push(this.skills);
  console.log(JSON.stringify(data));
  localStorage.setItem('username',this.registration.value.username);
  localStorage.setItem('password',this.registration.value.regpass);
  localStorage.setItem('email',this.registration.value.resEmail);
  localStorage.setItem('gender',this.registration.value.gender);


  
}

changeSelection(e){
  if(e.target.checked){
     this.skills.push(e.target.value);
  }
  else{
    this.skills.pop(e.target.value);
  }
}
//clear form
onReset() {
  this.submitted = false;
  this.login.reset();
}
}
