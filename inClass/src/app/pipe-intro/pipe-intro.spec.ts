import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeIntro } from './pipe-intro';

describe('PipeIntro', () => {
  let component: PipeIntro;
  let fixture: ComponentFixture<PipeIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
