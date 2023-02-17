import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const importsModule: Array<any> = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...importsModule
  ],
  exports: [
    ...importsModule
  ]
})
export class ImportsModule { }
