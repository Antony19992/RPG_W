import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {
  lanca: any = 100;
  espadachim: any = 80;
  arqueiro: any = 60;
  alabarda: any = 20;
  cavalo: any = 150;
  balista: any = 8;
  envlanca: any = 0;
  envespadachim: any = 0;
  envarqueiro: any = 0;
  envalabarda: any = 0;
  envcavalo: any = 0;
  envbalista: any = 0;
  atacando = false;

  constructor() { }

  ngOnInit(): void {
  }
emAtaque(){
  this.lanca = this.lanca - parseInt((<HTMLSelectElement>document.getElementById('lanceiro')).value);
  this.espadachim = this.espadachim - parseInt((<HTMLSelectElement>document.getElementById('envespadachim')).value);
  this.arqueiro = this.arqueiro - parseInt((<HTMLSelectElement>document.getElementById('envarqueiro')).value);
  this.alabarda = this.alabarda - parseInt((<HTMLSelectElement>document.getElementById('envalabarda')).value);
  this.cavalo = this.cavalo - parseInt((<HTMLSelectElement>document.getElementById('envcavalo')).value);
  this.balista = this.balista - parseInt((<HTMLSelectElement>document.getElementById('envbalista')).value);
  this.envlanca = (<HTMLSelectElement>document.getElementById('lanceiro')).value;
  this.envespadachim = (<HTMLSelectElement>document.getElementById('envespadachim')).value;
  this.envarqueiro = (<HTMLSelectElement>document.getElementById('envarqueiro')).value;
  this.envalabarda = (<HTMLSelectElement>document.getElementById('envalabarda')).value;
  this.envcavalo = (<HTMLSelectElement>document.getElementById('envcavalo')).value;
  this.envbalista = (<HTMLSelectElement>document.getElementById('envbalista')).value;
  this.atacando = !this.atacando;
}


}
