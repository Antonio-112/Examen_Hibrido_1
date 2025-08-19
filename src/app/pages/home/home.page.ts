import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonSelect, IonSelectOption
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../../components/circulo/circulo.component';
import { TrianguloComponent } from '../../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule, NgIf,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonSelect, IonSelectOption,
    CirculoComponent, TrianguloComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  figuraSeleccionada: 'circulo' | 'triangulo' | '' = '';
}
