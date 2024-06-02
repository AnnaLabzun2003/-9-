

import { Component } from '@angular/core';
import { QuadCalculator } from '../model/quad-calculator';

// Інтерфейс для презентера
interface Tab2Presenter {
  sideA: number;
  sideB: number;
  sideC: number;
  sideD: number;
  radius: number;
  area: number;
  calculate(): void;
}

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements Tab2Presenter {
  sideA: number = 0;
  sideB: number = 0;
  sideC: number = 0;
  sideD: number = 0;
  radius: number = 0;
  area: number = 0;

  constructor(private calculator: QuadCalculator) { }

  calculate() {
    this.calculator.calculate(this.sideA, this.sideB, this.sideC, this.sideD);
    this.radius = this.calculator.radius;
    this.area = this.calculator.area;
  }
}
