import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNgRx } from './counter-ng-rx';

describe('CounterNgRx', () => {
  let component: CounterNgRx;
  let fixture: ComponentFixture<CounterNgRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgRx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNgRx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
