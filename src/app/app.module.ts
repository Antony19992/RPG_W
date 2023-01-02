import { NgModule } from '@angular/core';

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
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import { MapComponent } from './base/map/map.component';
import { BrowserModule } from '@angular/platform-browser';
import { CepService } from './services/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    FerreiroComponent,
    SobreComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BreadcrumbModule,
    ButtonModule,
    SplitterModule,
    CardModule
  ],
  providers: [
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
