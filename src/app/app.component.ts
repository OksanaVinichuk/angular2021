import {Component} from '@angular/core';
// import {NgForm} from '@angular/forms';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
//   user = {name: 'andrew', age: 456};
//
//   submit(form: NgForm): void {
//     console.log(form);
//   }

name = new FormControl('', [Validators.required, Validators.minLength(3), this.customFukcValidator]);
age = new FormControl('456');
myForm = new FormGroup({
  name: this.name,
  age: this.age
});
fff(myForm: FormGroup): void {
    console.log(myForm);
  }
customFukcValidator(inputData: AbstractControl): any{
 if (inputData.value === 'fukc'){
   console.log(inputData);
   return {error: true, msg: 'fukc is present'};
 } else {return null; }
}
}

