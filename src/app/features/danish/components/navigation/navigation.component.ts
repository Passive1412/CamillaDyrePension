import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() backLink: string[];

  isMenuCollapsed: boolean;

  constructor(private routerLink: Router) {
    this.isMenuCollapsed = true;
    this.backLink = [''];
  }

  onBack(): void {
    this.routerLink.navigate(this.backLink, {
      queryParamsHandling: 'preserve',
    });
  }

  ngOnInit(): void {
    this.isMenuCollapsed = true;
  }
}
