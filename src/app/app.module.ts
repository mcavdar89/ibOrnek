import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonelComponent } from './personel/list/personel.component';
import { FormsModule } from '@angular/forms';
import { PersonelFormComponent } from './personel/form/personel-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonelComponent,
    PersonelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
