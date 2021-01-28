import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = {name: 'andrew', age: 456};

  submit(form: NgForm): void {
    console.log(form);
  }
}

