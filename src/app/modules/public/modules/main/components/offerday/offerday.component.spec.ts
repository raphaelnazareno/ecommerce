import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdayComponent } from './offerday.component';

describe('OfferdayComponent', () => {
  let component: OfferdayComponent;
  let fixture: ComponentFixture<OfferdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
