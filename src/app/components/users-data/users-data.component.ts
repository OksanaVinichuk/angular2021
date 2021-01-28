import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent {
user = {login: '', password: ''};
userArray = [];
submit(form: NgForm): void {
    console.log(form);
    this.userArray.push(this.user)
  };
}
