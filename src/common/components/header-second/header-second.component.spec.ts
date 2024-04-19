import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondComponent } from './header-second.component';

describe('HeaderSecondComponent', () => {
  let component: HeaderSecondComponent;
  let fixture: ComponentFixture<HeaderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
