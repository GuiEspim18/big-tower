import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel';

const importsModule: Array<any> = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  IvyCarouselModule
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
