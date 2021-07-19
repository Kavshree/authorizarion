import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserModel } from "../models/User.model";
import { SecurityService } from "../service/security.service";


@Component({
    selector: 'login',
    template: `<div class="form-group col-lg-2 col-md-6 col-sm-12">
    <form [formGroup]="UserForm" class="form-group">
        <label>UserName</label> <input type="text" name="userName" formControlName="userName" class="form-control"/>
        <label>Password</label> <input type="text" name="password" formControlName="password" class="form-control"/>
        <button class="btn btn-secondary" (click)="login()"> Login </button>
    </form>
    </div>`
})

export class LoginComponent {

    constructor(private _fb: FormBuilder, private _SecurityService: SecurityService, private _router: Router) {}

    UserForm= this._fb.group({
        userName: "",
        password: ""
    })

    login() {
        console.log(this.UserForm.value);
        this._SecurityService.login(this.UserForm.value).subscribe((resp) => {
            console.log(resp)
            if(resp) {
                this._router.navigate(['products'])
            }
        })
    }
}