import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeCompComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
