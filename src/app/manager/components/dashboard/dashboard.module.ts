import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: DashboardComponent,
  children:[
      // { path: ':id', component: DetailviewComponent },
      // { path: '', component: MainContentComponent }
  ]
},
  // { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
