import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Activitee } from './activitee';
import { ActiviteeService } from './activitie-service';

@Injectable({
  providedIn: 'root'
})
export class ResolveActiviteeService implements Resolve<Activitee> {

    constructor(
            private router: Router,
            private activiteeService: ActiviteeService,
            ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Activitee> {
        return this.activiteeService.getById(route.paramMap.get('id'));
    }

}