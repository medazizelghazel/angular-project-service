import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Ensure correct import path

@NgModule({
  declarations: [],  // No need to declare AppComponent if it is standalone
  imports: [
    BrowserModule,
    AppComponent    // Import AppComponent here if it is standalone
  ],
  providers: [],
  bootstrap: []  // No bootstrap component needed if you use standalone
})
export class AppModule { }
