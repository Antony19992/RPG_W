import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-ferreiro',
  templateUrl: './ferreiro.component.html'
})
export class FerreiroComponent implements OnInit {
   

  constructor(
    private servico: CepService,
  ) { }

  ngOnInit() {
  }

  consultaCep() {
    this.servico.getCep().subscribe(data => {
      console.log(data)
    })
  }

}
