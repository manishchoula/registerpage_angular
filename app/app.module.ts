// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SignupComponent } from './signup/components/signup/signup.component';
// import { LoginComponent } from './login/components/login/login.component';
// import { AngularFireAuth } from '@angular/fire/*';
// import {AngularFireModule} from '@angular/fire/*';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { environment } from '../environments/environment';


// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupComponent,LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     RouterModule,FormsModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireAuth,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';
import { AuthService } from './service/auth.service';
import { SignupComponent } from './signup/components/signup/signup.component';
import { ToasterComponent } from './Toaster/toaster/toaster.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
// https://console.firebase.google.com/project/angular-reg-22548/authentication/users