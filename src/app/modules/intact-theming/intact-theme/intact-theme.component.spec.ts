import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntactThemeComponent } from './intact-theme.component';

describe('IntactThemeComponent', () => {
  let component: IntactThemeComponent;
  let fixture: ComponentFixture<IntactThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntactThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntactThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
