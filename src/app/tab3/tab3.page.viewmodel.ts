// tab3.page.viewmodel.ts

import { Injectable } from '@angular/core';
import { QuadCalculator } from '../model/quad-calculator';

@Injectable()
export class Tab3PageViewModel {
  sideA: number = 0;
  sideB: number = 0;
  sideC: number = 0;
  sideD: number = 0;
  radius: number = 0;
  area: number = 0;

  constructor(private calculator: QuadCalculator) {}

  calculate() {
    this.calculator.calculate(this.sideA, this.sideB, this.sideC, this.sideD);
    this.radius = this.calculator.radius;
    this.area = this.calculator.area;
  }
}
