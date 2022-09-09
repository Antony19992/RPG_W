import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FerreiroComponent } from './base/ferreiro/ferreiro.component';
import { MapComponent } from './base/map/map.component';
import { SobreComponent } from './base/sobre/sobre.component';
import { HomeComponent } from './homepage/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'base', component: BaseComponent},
  {path: 'ferreiro', component: FerreiroComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
