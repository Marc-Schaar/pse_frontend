import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLibaryComponent } from './main-libary.component';

describe('MainLibaryComponent', () => {
  let component: MainLibaryComponent;
  let fixture: ComponentFixture<MainLibaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLibaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLibaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
