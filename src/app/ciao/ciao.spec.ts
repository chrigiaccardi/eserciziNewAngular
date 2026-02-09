import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciao } from './ciao';

describe('Ciao', () => {
  let component: Ciao;
  let fixture: ComponentFixture<Ciao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ciao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
