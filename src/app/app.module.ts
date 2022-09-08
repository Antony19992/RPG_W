import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FooterComponent } from './homepage/footer/footer.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BaseComponent } from './base/base.component';
import { FerreiroComponent } from './base/ferreiro/ferreiro.component';
import { SobreComponent } from './base/sobre/sobre.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    FerreiroComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BreadcrumbModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
