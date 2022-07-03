import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class AppComponent {
  buttonClicked = false;
  clicks = [];

  onShow() {
    this.buttonClicked = true;
    this.clicks.push(this.clicks.length + 1);
  }
  onHide() {
    this.buttonClicked = false;
    this.clicks.push(this.clicks.length + 1);
  }
}
