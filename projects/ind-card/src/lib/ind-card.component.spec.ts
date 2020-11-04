import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndCardComponent } from './ind-card.component';

describe('IndCardComponent', () => {
  let component: IndCardComponent;
  let fixture: ComponentFixture<IndCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
