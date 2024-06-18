import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { sendPasswordResetEmail,Auth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  password!:string;
  constructor(private auth:AngularFireAuth) {
    
  }
  registerWithEmailAndPassword(user : {email:string,password:string  }){
    return this.auth.createUserWithEmailAndPassword(user.email,user.password)
}
loginWithEmailAndPassword(user : {email:string,password:string  }){
  return this.auth.signInWithEmailAndPassword(user.email,user.password)

}
// passwordReset(user:{email:String}){
//   return this.authService.sendPasswordResetEmail(user.email);

// }

  
}
