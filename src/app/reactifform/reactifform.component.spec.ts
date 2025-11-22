import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifformComponent } from './reactifform.component';

describe('ReactifformComponent', () => {
  let component: ReactifformComponent;
  let fixture: ComponentFixture<ReactifformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactifformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactifformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
