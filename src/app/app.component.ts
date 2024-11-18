import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from './features/main-screen/main-screen.component';
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evenly';
}
