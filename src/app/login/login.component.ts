import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppSharedService } from '../app-shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flags: any = {
    displayFooter: Boolean,
    displayHeader: Boolean
  };

  constructor(private router: Router, private appSharedService: AppSharedService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getLoginFormDetails();
  }

  getLoginFormDetails() {
    this.appSharedService.setHeader(false);
    this.appSharedService.setFooter(false);
    this.changeDetectorRef.detectChanges();
  }

  onSubmitLogin() {
    this.appSharedService.setHeader(true);
    this.appSharedService.setFooter(true);
    this.router.navigate(['/home']);
  }

}
