import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCidadeComponent } from './card-cidade.component';

describe('CidadeComponent', () => {
  let component: CardCidadeComponent;
  let fixture: ComponentFixture<CardCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
