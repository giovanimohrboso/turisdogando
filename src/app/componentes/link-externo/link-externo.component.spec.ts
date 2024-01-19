import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkExternoComponent } from './link-externo.component';

describe('LinkExternoComponent', () => {
  let component: LinkExternoComponent;
  let fixture: ComponentFixture<LinkExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkExternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
