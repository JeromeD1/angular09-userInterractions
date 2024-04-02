import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../Models/Kitten.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {

  constructor(private fb: FormBuilder){}

@Output()
kittenEmitter: EventEmitter<Kitten> = new EventEmitter

kittenForm = this.fb.group(
  {
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: [new Date() , Validators.required],
    imgSrc: ['', Validators.required]
  }
)


onSubmit(){
    if(this.kittenForm.valid){
      const formData: Kitten = {
        name: this.kittenForm.value.name!,
        race: this.kittenForm.value.race!,
        birthdate: this.kittenForm.value.birthdate!,
        imgSrc: this.kittenForm.value.imgSrc!
      }
    
      this.kittenEmitter.emit(formData)

      this.kittenForm.reset({
        name: '',
        race: '',
        birthdate: new Date(),
        imgSrc: ''
      })
    }
}

}
