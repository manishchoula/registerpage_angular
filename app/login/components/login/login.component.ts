// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }

// src/app/login/login.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login'user: { email: string; password: string; }, password: any; }, password: any.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   hidePassword: boolean = true;

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//     console.log(this.loginForm);
    
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log('User:', this.loginForm.value);
      
//     console.log(this.loginForm);
//       // Handle login logic (e.g., send data to a server)
//     } else {
//       console.log('Form is invalid');
//     }
//   }

//   togglePasswordVisibility() {
//     this.hidePassword = !this.hidePassword;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[AuthService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.loginWithEmailAndPassword({email,password})
        .then(response => {
          console.log('User logged in successfully!', response.user);
          console.log(response);
          
        })
        .catch(error => {
          console.error('Login error:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
