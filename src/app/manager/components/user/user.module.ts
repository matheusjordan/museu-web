import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { UserService } from './user.service';

const routes: Routes = [
  { path:'', component: UserComponent,
  children:[
      // { path: ':id', component: DetailviewComponent },
      // { path: '', component: MainContentComponent }
  ]
},
  // { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    UserComponent
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
    UserService
  ]
})
export class UserModule { }
