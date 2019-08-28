import { Component } from '@angular/core';
import  "rxjs/Rx"; /* load all features */


@Component({
  selector: 'app-root',
  template: `<div>
              <h1 style="text-align:center">{{ title }}!</h1>
              <products-list></products-list>
              </div>` ,
styles : [`
 h1 {
   color: deepskyblue;
 }
`]

})

export class AppComponent {
  title: string = 'Angular practice';
}
