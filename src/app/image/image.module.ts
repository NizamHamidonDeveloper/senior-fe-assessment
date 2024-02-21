import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { ImageRoutingModule } from './image-routing.module';
import { ImageAssignTaskListComponent } from './image-assign-task-list/image-assign-task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ImageListComponent,
    ImageViewComponent,
    ImageAssignTaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImageRoutingModule,
  ]
})
export class ImageModule { }
