import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLegosComponent } from './components/add-legos/add-legos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LegosDetailComponent } from './components/legos-detail/legos-detail.component';
import { LegosListComponent } from './components/legos-list/legos-list.component';
import { RegiserComponent } from './components/regiser/regiser.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: RegiserComponent,
  },
  {
    path: 'legos-list',
    component: LegosListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-legos',
    component: AddLegosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-lego/:id',
    component: LegosDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
