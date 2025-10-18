import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPipeComponent } from './cp-pipe.component';

describe('CpPipeComponent', () => {
  let component: CpPipeComponent;
  let fixture: ComponentFixture<CpPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
