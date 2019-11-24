import { Component, OnInit } from '@angular/core';

import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  UserRegister: FormGroup;
  submitted = false;
    constructor(private fb: FormBuilder,private auth:AuthService,private router: Router,private messageService: MessageService) { }

    ngOnInit() {
      this.UserRegister=this.fb.group({
        firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        // userName:['',Validators.required],
        email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        contactNumber:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
        Passwords:this.fb.group({
          password:['',[Validators.required,Validators.minLength(4)]],
          confirmPassword:['',Validators.minLength(4)]
        },{validator:this.comparePasswords})
      });
    }
    
  comparePasswords( fb: FormGroup){
    let confirmPassword=fb.get('confirmPassword');
    if(confirmPassword.errors==null || 'passwordMismatch' in confirmPassword.errors){
      if(fb.get('password').value != confirmPassword.value)
        confirmPassword.setErrors({passwordMismatch:true});
      else
        confirmPassword.setErrors(null);
    }
  }

  onSubmit(){
    this.submitted = true;
    if (this.UserRegister.invalid) {
        return;
    }

    var result = 
    {
        firstName:this.UserRegister.value.firstName,
        lastName:this.UserRegister.value.lastName,
        userName:this.UserRegister.value.userName,
        email:this.UserRegister.value.email,
        contactNumber:this.UserRegister.value.contactNumber,
        password:this.UserRegister.value.Passwords.password,
        role:3 
    }

    console.log(result);

    this.auth.saveUser(result).subscribe(data =>
    {
      if(data.message == "Registered Successfully")
      {
        console.log(data.message);
        alert("Registered Successfully");
    
        
        this.router.navigate(['login']);
        return false;
      }
      else if( data.message == "Email Not Registered")
      {

        // this.messageService.add({
        //   severity: "error",
        //   detail: data.message
        // });
        alert("Email Not Registered")
        
        this.router.navigate(['user-register']);
        return false;
      }
    });
  }

    onReset() {
        this.submitted = false;
        this.UserRegister.reset();
    }
}