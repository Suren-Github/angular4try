import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ObservableComponent } from './observable/observable.component';
import { FormsComponent } from './components/forms/forms.component';
import { KeyupComponent } from './components/keyup/keyup.component';


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
