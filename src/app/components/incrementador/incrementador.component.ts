import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progress = 50;
  @Input() btnClass: string = "btn-primary";

  @Output() valorProgress: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.valorProgress.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && valor < 0) {
      this.valorProgress.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + valor;
    this.valorProgress.emit(this.progress);
  }

  onChange( nuevoValor: number ) {
    if( nuevoValor >= 100 ) {
      this.progress = 100;
    } else if( nuevoValor <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }

    this.valorProgress.emit(this.progress);
    
  }

}
