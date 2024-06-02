export class QuadCalculator {
    radius: number = 0; 
    area: number = 0; 
    constructor() { }
  
    calculate(sideA: number, sideB: number, sideC: number, sideD: number) {
      // Обчислення довжини діагоналей чотирикутника
      const diagonalAC = Math.sqrt(sideA ** 2 + sideC ** 2);
      const diagonalBD = Math.sqrt(sideB ** 2 + sideD ** 2);
  
      // Обчислення радіуса описаного кола
      this.radius = diagonalAC * diagonalBD / (4 * Math.sqrt(2));
  
      // Обчислення площі описаного кола
      this.area = Math.PI * this.radius ** 2;
    }
  }
  