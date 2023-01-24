import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoweredpriceComponent } from './loweredprice.component';

describe('LoweredpriceComponent', () => {
  let component: LoweredpriceComponent;
  let fixture: ComponentFixture<LoweredpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoweredpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoweredpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
