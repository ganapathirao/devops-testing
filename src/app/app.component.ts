import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'devops-learning';
  multiplyNumber = 2;

  getMultiplyed(num: number) {
    return num*2;
  }

}
