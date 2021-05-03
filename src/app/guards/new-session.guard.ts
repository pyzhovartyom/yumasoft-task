import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NewSessionGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _dataService: DataService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const PERMISSION = this._dataService.isNewSession;
      if (PERMISSION) {
        this._router.navigate(['/']);
        return false
      } else {
        return true;
      }
  }
  
}
