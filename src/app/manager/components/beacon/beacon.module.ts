import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeaconComponent } from './beacon.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { BeaconService } from './beacon.service';

const routes: Routes = [
  { path:'', component: BeaconComponent,
  children:[
      // { path: ':id', component: DetailviewComponent },
      // { path: '', component: MainContentComponent }
  ]
},
  // { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    BeaconComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BeaconService
  ]
})
export class BeaconModule { }
