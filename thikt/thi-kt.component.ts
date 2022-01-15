import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-thi-kt',
  templateUrl: './thi-kt.component.html',
  styleUrls: ['./thi-kt.component.css']
})
export class ThiKTComponent {
  @ViewChild('f') registerForm!:NgForm;
  nameImage: string='';
  priceImage:string='';
  images=[];
  nameImages=[''];
  priceImages=['']
  constructor() { }

  ngOnInit(): void {
  }
  addImage(){
    this.nameImages.push(this.nameImage);
    this.nameImage='';
    this.priceImages.push(this.priceImage);
    this.priceImage='';
    // @ts-ignore
    this.images.push(this.registerForm.value);

  }
}
