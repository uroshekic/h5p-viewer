import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H5pViewerComponent } from './h5p-viewer/h5p-viewer.component';

const routes: Routes = [
  { path: 'h5p', component: H5pViewerComponent },
  { path: 'h5p/:id', component: H5pViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
