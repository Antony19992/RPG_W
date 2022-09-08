import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {
  atacando = false;

  constructor() { }

  ngOnInit(): void {
  }
emAtaque(){
  this.atacando = !this.atacando;
}


}
