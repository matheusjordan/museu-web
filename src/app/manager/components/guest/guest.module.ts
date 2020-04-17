import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { GuestService } from './guest.service';

const routes: Routes = [
  { path:'', component: GuestComponent,
  children:[
      // { path: ':id', component: DetailviewComponent },
      // { path: '', component: MainContentComponent }
  ]
},
  // { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    GuestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GuestService
  ]
})
export class GuestModule { }
