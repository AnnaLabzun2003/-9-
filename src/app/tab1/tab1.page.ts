import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

//контролер
export class Tab1Page {
  sideA: number = 0;
  sideB: number = 0;
  sideC: number = 0;
  sideD: number = 0;
  radius: number = 0;
  area: number = 0;

  constructor() { }

  //модель
  calculate() {
    // Обчислення радіуса описаного кола
    const diagonalAC = Math.sqrt(this.sideA ** 2 + this.sideC ** 2);
    const diagonalBD = Math.sqrt(this.sideB ** 2 + this.sideD ** 2);
    this.radius = diagonalAC * diagonalBD / (4 * Math.sqrt(2));

    // Обчислення площі описаного кола
    this.area = Math.PI * this.radius ** 2;
  }
}
