import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponentComponent } from './register-component/register-component.component'
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ChildComponent } from './register-component/child.component';

@NgModule({
  declarations: [
    RegisterComponentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
