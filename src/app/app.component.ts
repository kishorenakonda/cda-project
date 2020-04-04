import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppSharedService } from './app-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CDAInterviewGuide';

  flags: any = {
    displayHeader: Boolean,
    displayFooter: Boolean
  };

  constructor(private router: Router, private appSharedService: AppSharedService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.appSharedService.setHeader(false);
    this.appSharedService.setFooter(false);

    this.appSharedService.isEnableHeader.subscribe((headerFlag) => {
      this.flags.displayHeader = headerFlag;
    });

    this.appSharedService.isEnableFooter.subscribe((footerFlag) => {
      this.flags.displayFooter = footerFlag;
    });

    this.changeDetectorRef.detectChanges();

    this.router.navigate(['/login']);
  }
}
