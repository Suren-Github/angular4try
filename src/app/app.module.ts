import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ObservableComponent } from './observable/observable.component';
import { FormsComponent } from './forms/forms.component';
import { KeyupComponent } from './keyup/keyup.component';


@NgModule({
  declarations: [
    AppComponent,
    //ObservableComponent,
    FormsComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
