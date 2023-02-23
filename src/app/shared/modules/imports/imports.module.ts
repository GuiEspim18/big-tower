import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';

const importsModule: Array<any> = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  IvyCarouselModule,
  HttpClientModule
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
