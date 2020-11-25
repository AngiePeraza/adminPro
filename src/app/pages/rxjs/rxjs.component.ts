import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;

  constructor() {
    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log("Subs: ", valor),
      error => console.warn("Error: ", error),
      () => console.info("Obs terminado")
    ); */

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  
  retornaIntervalo(): Observable<number> {
    return interval(500)
      .pipe(
        take(10),
        map(valor => {
          return valor + 1;
        }),
        filter( valor => valor % 2 === 0 )
      );
  }

  retornaObservable(): Observable<number> {
    let i = 0;

    const obs$ = new Observable<number>(observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error("Llegó a 2")
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
