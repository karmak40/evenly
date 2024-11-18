import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FriendsComponent } from "../friends/friends.component";
import { GroupsComponent } from "../groups/groups.component";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [MatTabsModule, MatGridListModule, FriendsComponent, GroupsComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

