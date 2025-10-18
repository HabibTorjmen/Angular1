import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpDirectiveComponent } from './cp-directive.component';

describe('CpDirectiveComponent', () => {
  let component: CpDirectiveComponent;
  let fixture: ComponentFixture<CpDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
