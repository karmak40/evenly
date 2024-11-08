import {Component} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, CommonModule, MatListModule],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  activeTab: string | null = "content1";

  // Method to set the active tab
  openTab(contentId: string): void {
    this.activeTab = contentId;
  }
}

