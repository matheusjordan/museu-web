import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'employeemanager', loadChildren:'./manager/employeemanager.module#EmployeemanagerModule'},
  { path:'dashboard', loadChildren:'./manager/components/dashboard/dashboard.module#DashboardModule'},
  { path:'user', loadChildren:'./manager/components/user/user.module#UserModule'},
  { path:'beacon', loadChildren:'./manager/components/beacon/beacon.module#BeaconModule'},
  { path:'dashboard', loadChildren:'./manager/components/dashboard/dashboard.module#DashboardModule'},
  { path:'guest', loadChildren:'./manager/components/guest/guest.module#GuestModule'},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
