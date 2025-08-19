export class HomePage {
  selectedShape: string;

  constructor() {
    this.selectedShape = '';
  }

  onShapeSelect(shape: string) {
    this.selectedShape = shape;
  }

  calculatePerimeter(): number {
    if (this.selectedShape === 'circle') {
      // Logic to calculate perimeter for circle
      return 0; // Placeholder value
    } else if (this.selectedShape === 'triangle') {
      // Logic to calculate perimeter for triangle
      return 0; // Placeholder value
    }
    return 0;
  }
}
