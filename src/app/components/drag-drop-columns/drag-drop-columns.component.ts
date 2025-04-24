import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-columns',
  templateUrl: './drag-drop-columns.component.html',
  styleUrls: ['./drag-drop-columns.component.scss']
})
export class DragDropColumnsComponent {
  columns = ['Name', 'Age', 'Email', 'Phone'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
