import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YaCoreModule }  from 'angular2-yandex-maps';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YaCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
