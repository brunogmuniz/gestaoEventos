import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAdmin } from './modulo-admin';

describe('ModuloAdmin', () => {
  let component: ModuloAdmin;
  let fixture: ComponentFixture<ModuloAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
