import { AppUserAuth } from '../models/AppUserAuth.model';
import { UserModel } from '../models/User.model';
import { LOGIN_MOCKS } from '../models/loginMock.data';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SecurityService {
    securityObject: AppUserAuth = new AppUserAuth();

    resetSecurityObject(): void {
        this.securityObject.userName = "";
        this.securityObject.bearerToken = "";
        this.securityObject.isAuthenticated = false;
        this.securityObject.canAccessProducts = false;
        this.securityObject.canAddProduct = false;
        this.securityObject.canSaveProduct = false;
        this.securityObject.canAccessCategories = false;
        this.securityObject.canAddCategory = false;
        localStorage.removeItem("bearerToken");
    }

    login(curruser) {
        this.resetSecurityObject()
        let foundUser = LOGIN_MOCKS.find(data => data.userName == curruser.userName);
        Object.assign(this.securityObject, foundUser)

        if(this.securityObject.userName != null) {
            localStorage.setItem('bearerToken', this.securityObject.bearerToken)
        }
        return of(this.securityObject)
    }

    logout(): void {
        this.resetSecurityObject();
    }



}