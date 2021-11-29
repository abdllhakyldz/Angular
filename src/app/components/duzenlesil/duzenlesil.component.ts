import { Sonuc } from './../../models/sonuc';
import { Kisi } from './../../models/kisi';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duzenlesil',
  templateUrl: './duzenlesil.component.html',
  styleUrls: ['./duzenlesil.component.css']
})
export class DuzenlesilComponent implements OnInit {

"Id":number;
"islem":number;
secDos: Kisi = new Kisi();
KisiSonuc : Sonuc = new Sonuc();

  constructor( 
    public service:DataService,
    public route:ActivatedRoute
    
    ) {
    
   }

  ngOnInit() {
    this.Id=this.route.snapshot.params["id"];
    this.islem=this.route.snapshot.params["islem"]; 
    this.secDos=this.service.DosyaById(this.Id);
  }

  Kaydet(){
    this.KisiSonuc=this.service.DosyaDüzenle(this.secDos);
  }

  Sil(){
    this.KisiSonuc=this.service.DosyaSil(this.secDos);
  }
}
