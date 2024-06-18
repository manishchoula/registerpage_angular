// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   signupForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.signupForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.signupForm.valid) {
//       console.log('User:', this.signupForm.value);
//       // Handle form submission, e.g., send the data to a server
//     } else {
//       console.log('Form is invalid');
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../../Toaster/service/toaster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ AuthService,],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.registerWithEmailAndPassword({ email, password})
        .then(response => {
          console.log('User created successfully!', response.user);
          // this.toatserService.showSuccess("Successfully loged in");
          setTimeout(()=>this.router.navigate(['/login']),2000)
        })
        .catch(error => {
          console.error('Signup error:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  
  }}
