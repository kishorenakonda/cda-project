import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppSharedService {

  displayHeader: boolean;
  displayFooter: boolean;

  public isEnableHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isEnableFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setHeader(flagStatus: boolean) {
    this.displayHeader = flagStatus;
    this.isEnableHeader.next(flagStatus);
  }

  getHeader() {
    return this.displayHeader;
  }

  setFooter(flagStatus: boolean) {
    this.displayFooter = flagStatus;
    this.isEnableFooter.next(flagStatus);
  }

  getFooter() {
    return this.displayFooter;
  }
}

