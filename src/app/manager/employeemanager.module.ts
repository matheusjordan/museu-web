import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

import { EmployeemanagerAppComponent } from './employeemanager-app.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { MainContentComponent } from '../shared/components/main-content/main-content.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { EmployeeManagerRoutingModule } from './employeemanager-routing.module';
import { NewEmployeeDialogComponent } from '../shared/components/new-employee-dialog/new-employee-dialog.component';
import { DetailviewComponent } from '../shared/components/detailview/detailview.component';
import { NotesComponent } from '../shared/components/notes/notes.component';
import { EditEmployeeDialogComponent } from '../shared/components/edit-employee-dialog/edit-employee-dialog.component';

@NgModule({
  declarations: [
    EmployeemanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NewEmployeeDialogComponent,
    DetailviewComponent,
    NotesComponent,
    EditEmployeeDialogComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    EmployeeManagerRoutingModule
  ],
  entryComponents: [NewEmployeeDialogComponent, EditEmployeeDialogComponent]
})
export class EmployeemanagerModule { }
