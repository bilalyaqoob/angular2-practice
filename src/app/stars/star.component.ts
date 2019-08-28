import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : ' star-rating ',
    templateUrl:'./star.component.html',
})

export class StarComponent implements OnChanges {
starWidth : number;
@Input() rating : number ;

ngOnChanges(): void {
    this.starWidth = this .rating *86 / 5;
}

@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string> ();

onClick(){
     this.ratingClicked.emit(` The rating ${this.rating} was clicked!`);
 }

}

