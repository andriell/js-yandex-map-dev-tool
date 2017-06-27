import { Component } from '@angular/core';
import { YaCoreModule }  from 'angular2-yandex-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yandex Map Component';
  click = function() {
    this.title = '100500';
  }
}
