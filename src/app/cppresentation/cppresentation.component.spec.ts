import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppresentationComponent } from './cppresentation.component';

describe('CppresentationComponent', () => {
  let component: CppresentationComponent;
  let fixture: ComponentFixture<CppresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CppresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CppresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
