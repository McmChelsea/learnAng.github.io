import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
 { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
 { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
 { path: 'profile', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
 { path: 'contact', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
 { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
 { path: 'register', loadChildren: () => import('./modules/registerModule/register.module').then(m => m.RegisterModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
