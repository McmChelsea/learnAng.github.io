import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutCompComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
