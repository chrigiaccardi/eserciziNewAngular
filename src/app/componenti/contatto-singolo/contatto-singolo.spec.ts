import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoSingolo } from './contatto-singolo';

describe('ContattoSingolo', () => {
  let component: ContattoSingolo;
  let fixture: ComponentFixture<ContattoSingolo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattoSingolo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattoSingolo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
