import { IonicModule } from '@ionic/angular';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ], exports: [CalculadoraComponent,IonicModule],
})
export class ComponentsModule { }
