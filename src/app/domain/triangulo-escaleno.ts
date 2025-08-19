import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(private ladoA: number, private ladoB: number, private ladoC: number) {
    super('Triángulo Escaleno');
  }
  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
