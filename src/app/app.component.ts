import { Component } from '@angular/core';
import { SiblingService } from './sibling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loan-Calculator';

  constructor(private service:SiblingService){
    
  }
}
