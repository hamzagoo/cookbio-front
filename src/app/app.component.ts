/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Role } from './@core/models/role';
import { User } from './@core/models/user';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    let user: User = {
      id: 1,
      email: "hamza@mountacer.com",
      password: "hamza",
      role: Role.MANAGER,
      username: "hamza.mountacer"
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    /*
    var userInStore = localStorage.getItem("currentUser");
    var currentUser = JSON.parse(userInStore);
    */

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
