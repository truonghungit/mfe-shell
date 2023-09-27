import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe.users',
            exposedModule: './Module',
          }).then((m) => m.UsersModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe.posts',
            exposedModule: './Module',
          }).then((m) => m.PostsModule),
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
