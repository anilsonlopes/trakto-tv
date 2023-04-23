import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialTodosRoutingModule } from './material-todos-routing.module';
import { MaterialTodosComponent } from './material-todos.component';


@NgModule({
  declarations: [
    MaterialTodosComponent
  ],
  imports: [
    CommonModule,
    MaterialTodosRoutingModule
  ]
})
export class MaterialTodosModule { }
