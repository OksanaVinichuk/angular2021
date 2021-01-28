import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectures';

  onInputAction(el: HTMLInputElement): void {
console.log(this.title)
  }
}

