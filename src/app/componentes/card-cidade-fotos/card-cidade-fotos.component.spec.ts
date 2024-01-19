import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCidadeFotosComponent } from './card-cidade-fotos.component';

describe('CardCidadeFotosComponent', () => {
  let component: CardCidadeFotosComponent;
  let fixture: ComponentFixture<CardCidadeFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCidadeFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCidadeFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
