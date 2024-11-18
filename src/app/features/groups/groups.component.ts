import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [MatListModule, MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

}
