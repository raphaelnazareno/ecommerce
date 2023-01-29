import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'public' },
  {
    path: '',
    data: {
      breadcrumb: ''
    },
    loadChildren: () =>
      import('./modules/public/public.module').then(
        (m) => m.PublicModule
      ),
  },
  {
    path: 'private',
    data: {
      breadcrumb: ''
    },
    loadChildren: () =>
      import('./modules/private/private.module').then(
        (m) => m.PrivateModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
