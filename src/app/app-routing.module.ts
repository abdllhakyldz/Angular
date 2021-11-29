import { DuzenlesilComponent } from './components/duzenlesil/duzenlesil.component';
import { Test1Component } from './components/test1/test1.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

 {path: '', component: HomeComponent },
 {path: 'dosyalar', component: Test1Component},
 {path: 'duzenlesil/:id/:islem', component: DuzenlesilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
