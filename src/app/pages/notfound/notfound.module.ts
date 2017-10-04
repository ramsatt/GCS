import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: 'page-404', component: Page404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page404Component]
})
export class NotfoundModule { }
