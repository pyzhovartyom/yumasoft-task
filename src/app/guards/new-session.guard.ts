import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NewSessionGuard implements CanActivate {

  constructor(
    private router: Router,
    private dataService: DataService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const PERMISSION = this.dataService.isNewSession;
      if (PERMISSION) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
  }
}
