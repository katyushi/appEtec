import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosvisitasPage } from './fotosvisitas.page';

describe('FotosvisitasPage', () => {
  let component: FotosvisitasPage;
  let fixture: ComponentFixture<FotosvisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosvisitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosvisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
