import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { Kitten } from './Models/Kitten.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateKittenComponent, ListKittenComponent, UserKittenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  kittenList: Kitten[] = []

  adoptedKittens: Kitten[]= []

  addKitten(newKitten: Kitten){
    this.kittenList.push(newKitten)
  }


  adoptKitten(kitten: Kitten) {
    this.kittenList = this.kittenList.filter(item => item.name !== kitten.name)
    this.adoptedKittens.push(kitten)
  }
}
