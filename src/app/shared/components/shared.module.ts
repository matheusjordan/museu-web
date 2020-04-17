import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewEmployeeDialogComponent } from './new-employee-dialog/new-employee-dialog.component';
import { NotesComponent } from './notes/notes.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DetailviewComponent,
    EditEmployeeDialogComponent,
    MainContentComponent,
    NewEmployeeDialogComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    DetailviewComponent,
    EditEmployeeDialogComponent,
    MainContentComponent,
    NewEmployeeDialogComponent,
    NotesComponent
  ]
})
export class SharedModule { }
