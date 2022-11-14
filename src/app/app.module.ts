import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthenticationModule } from './authentication/authentication.module';


const route:Routes=[
  {path:'auth',redirectTo:'authentication',pathMatch:'full'},
   { path:'authentication', 
   loadChildren:() =>import('../app/authentication/authentication.module').then(m=> m.AuthenticationModule)
 },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,AuthenticationModule,RouterModule.forRoot(route) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
