import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];  
  valor: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'base', icon: 'pi pi-fw pi-users', routerLink: ['/base']},
      {label: 'Ferreiro', icon: 'pi pi-fw pi-ticket', routerLink: ['/ferreiro']},
      {label: 'Relatórios', icon: 'pi pi-fw pi-file'},
      {label: 'Sobre', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/sobre']},
      {label: 'Mapa', icon: 'pi pi-fw pi-map', routerLink: ['/map']}
  ];
  }


}
