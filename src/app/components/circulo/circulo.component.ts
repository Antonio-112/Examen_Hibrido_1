import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonImg, IonItem, IonLabel, IonInput, IonButton, IonText, IonCardSubtitle } from '@ionic/angular/standalone';
import { Circulo } from '../../domain/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [IonCardSubtitle, 
    CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonImg, IonItem, IonLabel, IonInput, IonButton, IonText
  ],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: number | null = null;

  calcular() {
    if (this.radio == null || this.radio <= 0) {
      this.resultado = null;
      return;
    }
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}
