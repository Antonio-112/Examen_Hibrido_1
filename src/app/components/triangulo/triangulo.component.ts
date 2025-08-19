import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonImg, IonItem, IonLabel, IonInput, IonButton, IonText, IonCardSubtitle } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../domain/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [IonCardSubtitle, 
    CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonImg, IonItem, IonLabel, IonInput, IonButton, IonText
  ],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  resultado: number | null = null;

  calcular() {
    if (!this.ladoA || !this.ladoB || !this.ladoC || this.ladoA <= 0 || this.ladoB <= 0 || this.ladoC <= 0) {
      this.resultado = null;
      return;
    }
    const t = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.resultado = t.calcularPerimetro();
  }
}
