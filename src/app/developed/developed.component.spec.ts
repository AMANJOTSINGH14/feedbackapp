import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopedComponent } from './developed.component';

describe('DevelopedComponent', () => {
  let component: DevelopedComponent;
  let fixture: ComponentFixture<DevelopedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
