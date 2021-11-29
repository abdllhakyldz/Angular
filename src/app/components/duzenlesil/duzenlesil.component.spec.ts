/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DuzenlesilComponent } from './duzenlesil.component';

describe('DuzenlesilComponent', () => {
  let component: DuzenlesilComponent;
  let fixture: ComponentFixture<DuzenlesilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuzenlesilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuzenlesilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
