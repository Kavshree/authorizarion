import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SecurityService } from "./security.service";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private _SecurityService: SecurityService, private _router: Router) {}
    canActivate(next, state) {
        let claimName = next.data.claimName;
        //let claimName: string = next.data["claimName"];
    return this._SecurityService.securityObject.isAuthenticated && this._SecurityService.securityObject[claimName];
    }
}