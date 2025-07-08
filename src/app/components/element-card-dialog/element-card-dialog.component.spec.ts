import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCardDialogComponent } from './element-card-dialog.component';

describe('ElementCardDialogComponent', () => {
  let component: ElementCardDialogComponent;
  let fixture: ComponentFixture<ElementCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementCardDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
