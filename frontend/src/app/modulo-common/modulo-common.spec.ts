import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCommon } from './modulo-common';

describe('ModuloCommon', () => {
  let component: ModuloCommon;
  let fixture: ComponentFixture<ModuloCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloCommon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloCommon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
