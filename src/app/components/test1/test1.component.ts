
import { DataService } from './../../services/data.service';
import { Kisi } from './../../models/kisi';
import { Component, OnInit } from '@angular/core'; 
 
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
 "secKisi": Kisi = new Kisi(); 
"baslik": string= "Yeni Kayıt"
 "kisiler": Kisi[] = [];
 

  constructor(public service:DataService  ) { }

  ngOnInit(): void { 
    this.KisiListeGetir();
    this.secKisi.Id =0;
   }

 KisiListeGetir(){
    this.kisiler=this.service.DosyaListele();
 }

 

 KisiSil(k:Kisi){
   var index=this.kisiler.indexOf(k); 
   this.kisiler.splice(index,1);
 }

 Kaydet(){ 
   if(this.secKisi.Id==0) {
     var Id= Math.floor(Math.random()*100);
     this.secKisi.Id=Id;
     this.kisiler.push(this.secKisi);
   }
   this.secKisi = new Kisi;
   this.baslik = "Yeni Kayıt";

 }

 KisiDuzenle(k:Kisi){
   this.secKisi =k;
   this.baslik = "Kayıt Düzenle";

 }


}
