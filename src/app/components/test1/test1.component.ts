import { Sonuc } from './../../models/sonuc';
import { DataService } from './../../services/data.service';
import { Kisi } from './../../models/kisi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
 "ad":string;
 "kisiler":Kisi[];
 "KisiSonuc":Sonuc= new Sonuc();
 "ara": string = "";
 "sira":string = "adsoyad";
 "sayfa":number = 1;  
 "limit":number =10;
 "dosya":File;

  constructor(public service:DataService  ) { }

  ngOnInit(): void {
    this.ad=this.service.siteAdi;
    this.KisiListeGetir();
  }

 KisiListeGetir(){
    this.kisiler=this.service.DosyaListele();
 }

 

 Kaydet(k:string, dos:string, tur:string, ){
   var yeni:Kisi= new Kisi();
   yeni.Id=Math.floor(Math.random()*1000);
   yeni.dosyaadi = k;
   yeni.dosya =dos;
   yeni.dosyaturu =tur;
   this.KisiSonuc=this.service.DosyaEkle(yeni);
 }




}
