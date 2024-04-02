import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../Models/Kitten.model';
import { KittenCardComponent } from '../kitten-card/kitten-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [KittenCardComponent, CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

@Input()
kittenList!: Kitten[]

@Output()
adotedKittenEmitter: EventEmitter<Kitten> = new EventEmitter()

sendAdoptedKitten(kitten: Kitten){
  this.adotedKittenEmitter.emit(kitten)
}

}
