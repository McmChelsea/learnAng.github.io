import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'profile', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'contact', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
