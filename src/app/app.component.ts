import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro App';

  a = 10;
  b = 20;
  c = 0;

  Sum() {
    this.c = this.a + this.b;
  }

}
