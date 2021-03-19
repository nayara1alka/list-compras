import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoMaterialModule } from './material.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    DemoMaterialModule
  ],
  exports: [
     DemoMaterialModule
  ]
})
export class SharedModule { }
