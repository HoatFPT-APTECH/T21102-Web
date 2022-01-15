import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiKTComponent } from './thi-kt.component';

describe('ThiKTComponent', () => {
  let component: ThiKTComponent;
  let fixture: ComponentFixture<ThiKTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiKTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiKTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
