import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  //redirect to login screen
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    //redirect to login screen
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AutoLoginGuard]
  },
  //inside area after login
  {
    path: 'inside',
    loadChildren: () => import('./pages/overview/overview.module').then( m => m.OverviewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inside/:chatid',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  //inside area after login
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
