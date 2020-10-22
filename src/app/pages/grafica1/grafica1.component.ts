import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1 = [
    [250, 130, 70]
  ];

  labels2 = ['Download Compras', 'In-Store Compras', 'Mail-Order Compras'];
  data2 = [
    [100, 230, 30]
  ];
  
  labels3 = ['Download Ventas 2', 'In-Store Ventas 2', 'Mail-Order Ventas 2'];
  data3 = [
    [20, 120, 130]
  ];

  labels4 = ['Download Compras 2', 'In-Store Compras 2', 'Mail-Order Compras 2'];
  data4 = [
    [120, 320, 10]
  ];

}
