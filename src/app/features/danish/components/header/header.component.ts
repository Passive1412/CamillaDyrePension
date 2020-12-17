import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AccountService } from '../services';
import { Account, Role } from '../../../../core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backLink: string[];

  Role = Role;

  title: string;
  isMenuCollapsed: boolean;

  constructor(
    private routerLink: Router,
    // public account: Account
  ) // private accountService: AccountService
  {
    // this.account = account;
    this.title = 'Camilla\'s dyrepensionat';
    this.isMenuCollapsed = true;
    this.backLink = [''];
    // this.accountService.account.subscribe((x) => (this.account = x));
  }

  onBack(): void {
    this.routerLink.navigate(this.backLink, {
      queryParamsHandling: 'preserve',
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    // this.accountService.logout();
  }

}
