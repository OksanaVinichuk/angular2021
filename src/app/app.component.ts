import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('');
  myForm = new FormGroup({
    login: this.login,
    password: this.password
  });

  constructor(private authService: AuthService) {
  }

  fff(myForm: FormGroup): void {
    const res = this.authService.login(myForm.getRawValue());
    console.log(res);
  }
}
