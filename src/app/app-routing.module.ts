import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'image',
    pathMatch: 'full'
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then(m => m.ImageModule)
  },
  // { path: '',  redirectTo: '/product', pathMatch: 'full' },
  // { path: 'product', loadChildren: './product/product.module' },

  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
