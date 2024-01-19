import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPrincipalComponent } from './texto-principal.component';

describe('TextoPrincipalComponent', () => {
  let component: TextoPrincipalComponent;
  let fixture: ComponentFixture<TextoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
