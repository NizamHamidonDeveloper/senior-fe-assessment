import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageViewComponent } from './image-view/image-view.component';

const imageRoutes: Routes = [
  {
      path: '',
      component: ImageListComponent
  },
  {
      path: ':id',
      component: ImageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(imageRoutes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
