import { Component } from '@angular/core';
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groups-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groups-holder.component.html',
  styleUrl: './groups-holder.component.css'
})
export class GroupsHolderComponent {

  entries: Group[] = [
    { id: 1, title: 'Copenhagen', description: 'Description of entry 1' },
    { id: 2, title: 'Spain', description: 'Description of entry 2' },
    { id: 3, title: 'Greece', description: 'Description of entry 3' },
  ];
}
