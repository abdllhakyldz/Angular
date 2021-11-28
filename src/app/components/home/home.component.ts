import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
"mesaj":string;
"islem":boolean=false;
  constructor() { }

  ngOnInit() {
  }

  tikla() {
    console.log("Butona Tıklandı");
    this.mesaj="Butona Tıklandı";
  }
  goster() {
this.islem=true;
  } 
  gizle()  {
this.islem=false;
  }
  gostergizle() {
    this.islem = !this.islem
  }
}
