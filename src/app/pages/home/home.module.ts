import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ComponentModule} from '../../component/component/component.module';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
