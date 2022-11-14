import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PracticeService } from './practice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const route: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
   ],
   declarations: [AuthComponent, HomeComponent, LoginComponent, NopageComponent],
  providers:[PracticeService]
})
export class AuthenticationModule {}
