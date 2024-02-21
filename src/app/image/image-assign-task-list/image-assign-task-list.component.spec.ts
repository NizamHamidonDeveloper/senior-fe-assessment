import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAssignTaskListComponent } from './image-assign-task-list.component';

describe('ImageAssignTaskListComponent', () => {
  let component: ImageAssignTaskListComponent;
  let fixture: ComponentFixture<ImageAssignTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAssignTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAssignTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
