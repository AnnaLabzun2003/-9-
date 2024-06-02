// tab3.page.ts

import { Component } from '@angular/core';
import { Tab3PageViewModel } from './tab3.page.viewmodel';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  providers: [Tab3PageViewModel] // Додаємо ViewModel як провайдер
})
export class Tab3Page {
  constructor(public viewModel: Tab3PageViewModel) {}
}
