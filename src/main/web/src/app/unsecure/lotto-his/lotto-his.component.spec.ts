import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoHisComponent } from './lotto-his.component';

describe('LottoHisComponent', () => {
  let component: LottoHisComponent;
  let fixture: ComponentFixture<LottoHisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoHisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
