import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingIntro } from './routing-intro';

describe('RoutingIntro', () => {
  let component: RoutingIntro;
  let fixture: ComponentFixture<RoutingIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
