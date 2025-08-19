import { TrianguloEscaleno } from './triangulo-escaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(lado: number) {
    super(lado, lado, lado);
  }
}
