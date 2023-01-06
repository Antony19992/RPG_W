import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-ferreiro',
  templateUrl: './ferreiro.component.html'
})
export class FerreiroComponent implements OnInit {
   bairro: any;
   complemento: any;
   ddd: any;
   ibge: any;
   localidade: any;
   logradouro: any;
   siafi: any;
   uf: any;

  constructor(
    private servico: CepService,
  ) { }

  ngOnInit() {
  }
  public cep: any;
  

  consultaCep(valor: string) {
    this.servico.getCep(valor).subscribe(data => {
      console.log(data);
      console.log(data.complemento);
      this.bairro = data.bairro
      this.complemento = data.complemento
      this.ddd = data.ddd
      this.ibge = data.ibge
      this.localidade = data.localidade
      this.logradouro = data.logradouro
      this.siafi = data.siafi
      this.uf = data.uf
    })
  }

}
