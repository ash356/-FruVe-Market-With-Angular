import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// declare const myTest: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'SE2_Project';
  faCoffee = faCoffee;
  
  // onclick(){
  //   myTest()
  // }
}
