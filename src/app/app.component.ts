import { Component } from '@angular/core';
import { SecurityService } from './service/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authorizarion';

  constructor(private _SecurityObj: SecurityService) {}

  accessControl=this._SecurityObj;
  

  ngOnInit() {
    console.log(this.accessControl)
  }

  logout() {
    this._SecurityObj.logout()
  }

  
}
