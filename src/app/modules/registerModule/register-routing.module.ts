import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component'
import { ChildComponent } from './register-component/child.component'

const routes: Routes = [
 { 
  path: '', 
  component: RegisterComponentComponent,
  children : [
      {
        path: 'test',
        component: ChildComponent
      }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
