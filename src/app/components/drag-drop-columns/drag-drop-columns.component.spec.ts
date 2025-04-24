import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropColumnsComponent } from './drag-drop-columns.component';

describe('DragDropColumnsComponent', () => {
  let component: DragDropColumnsComponent;
  let fixture: ComponentFixture<DragDropColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
