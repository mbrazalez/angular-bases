import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <h1>Hola counter</h1>
    <p>
      {{counter}}
  </p>
  <button (click)="aumentarCont()">+1</button>
  <button (click)="resetearCont()">Reset</button>
  <button (click)="decrementarCont()">-1</button>'
`
})

export class CounterComponent{
  public counter: number = 10;
  aumentarCont ():void{
    this.counter += 1;
  }

  decrementarCont ():void{
    this.counter -= 1;
  }

  resetearCont ():void{
    this.counter = 10;
  }
}
