// import { Component, OnInit } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

// @Component({
//   selector: 'app-observable',
//   templateUrl: './observable.component.html',
//   styleUrls: ['./observable.component.css']
// })
// export class ObservableComponent implements OnInit {

//   private data: Observable<string>;

//   private fruits: Array<string> = [];

//   private hasErr: boolean;

//   private isFinished: boolean;

//   constructor() { }

//   ngOnInit() {
//   }

//   run() {
//     this.data = new Observable
//       (
//       observer => {
//         setTimeout(() => {
//           observer.next('Apple');
//         }, 1000);

//         setTimeout(() => {
//           observer.next('mango');
//         }, 2000);
//         setTimeout(() => {
//           observer.next('Orannge');
//         }, 3000);
//         setTimeout(() => {
//           observer.complete();
//         }, 4000);

//       }
//       )
//   };


//   let subscription = this.data.subscribe(
//     fruit => this.fruits.push(fruit),
//     error => this.hasErr = false,
//     () => this.isFinished = true
//   );
//   this.; }}


// }
