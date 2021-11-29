import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Sonuc } from './../models/sonuc';
import { Kisiler } from './data'; 
import { Kisi } from './../models/kisi';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public apiUrl="http://localhost:4200/";
public siteAdi= "Dosya Yönetim Portalı"; 


constructor(public http: HttpClient){}

 



UyeLogin(k: string , p:string){

return this.http.get(this.apiUrl+"uye?kadi="+k+ "&parola=" +  p);
}

DosyaListele(){
  return Kisiler;
}


DosyaById(id: number){
var filtre=Kisiler.filter(s=> s.Id == id);
return filtre[0];
}


DosyaEkle(kat: Kisi){
 var sonuc: Sonuc=new Sonuc();
 var filtre=Kisiler.filter(s=> s.dosyaadi==kat.dosyaadi);
 
  if (filtre.length>0) { sonuc.islem=false ; sonuc.mesaj="Girilen Dosya Adı Kayıtlıdır.Başka Bir Ad Deneyiniz";}
  else{ Kisiler.push(kat); sonuc.islem=true ; sonuc.mesaj="Dosya Eklendi";}
 return sonuc  
}

DosyaDüzenle(kat: Kisi){
var index=Kisiler.indexOf(kat);
Kisiler[index].dosyaadi=kat.dosyaadi;
var sonuc: Sonuc=new Sonuc();
sonuc.islem=true ; sonuc.mesaj="Dosya Düzenlendi";
return sonuc;
}

DosyaSil(kat: Kisi){
var sonuc: Sonuc=new Sonuc();
var index=Kisiler.indexOf(kat);
Kisiler.splice(index,1);
sonuc.mesaj="Dosya Silindi";
return sonuc
}



KayitAraSirala(ara:string, sira:string)  {
return this.http.get(this.apiUrl+"kisi?q=" + ara + "&_sort=" + sira );
}

KayitSayfalar(p:number,lim:number){
    return this.http.get(this.apiUrl+"kisi?page=" + p + "&_limit=" + lim );
}
}