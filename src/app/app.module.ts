import { NgModule } from '@angular/core';
import { BrowserModule,  Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';


const routes: Routes = [
  {
    path: 'hello', component: HelloComponent
  },
  {
    path: 'bye', component: ByeComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, ByeComponent ],
  providers: [
    Title
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
