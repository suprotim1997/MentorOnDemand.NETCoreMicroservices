import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gaurd1Guard } from './shared/gaurd/gaurd1.guard';
import { Gaurd2Guard } from './shared/gaurd/gaurd2.guard';
import { Gaurd3Guard } from './shared/gaurd/gaurd3.guard';
import { Gaurd4Guard } from './shared/gaurd/gaurd4.guard';

export const routes: Routes = [

  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren:'src/app/home/home.module#HomeModule'},
  { path: 'user-register', loadChildren:'./user-register/user-register.module#UserRegisterModule'},
  { path: 'trainer-register', loadChildren:'./trainer-register/trainer-register.module#TrainerRegisterModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'search-trainings', loadChildren: './search-trainings/search-trainings.module#getSearchDataModule'},
  { path: 'user-dashboard', loadChildren:'./user-dashboard/user-dashboard.module#UserDashboardModule'},
  { path: 'trainer-dashboard', loadChildren:'./trainer-dashboard/trainer-dashboard.module#TrainerDashboardModule'},
  { path: 'admin-dashboard', loadChildren:'./admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
