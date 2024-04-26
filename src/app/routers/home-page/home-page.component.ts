import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { CounterComponentComponent } from '../../shared/components/counter-component/counter-component.component';
import { WelcomeDirective } from '../../core/directives/welcome.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, CounterComponentComponent,WelcomeDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
