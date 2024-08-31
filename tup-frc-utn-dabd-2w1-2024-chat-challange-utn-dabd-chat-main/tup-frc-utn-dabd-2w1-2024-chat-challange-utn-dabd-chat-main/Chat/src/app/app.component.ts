import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Comp2Component,Comp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat';
}
