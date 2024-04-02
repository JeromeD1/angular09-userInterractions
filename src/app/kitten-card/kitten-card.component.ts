import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../Models/Kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitten-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.scss'
})
export class KittenCardComponent {

@Input()
kitten!: Kitten

@Output()
adoptionEmitter: EventEmitter<Kitten> = new EventEmitter()

showInfo: boolean = false

onMouseEnter(){
  this.showInfo = true
}

onMouseLeave(){
  this.showInfo = false
}


adoptKitten(){
  this.adoptionEmitter.emit(this.kitten)
}

}
