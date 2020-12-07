import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddelemComponent } from './addelem.component';

describe('AddelemComponent', () => {
  let component: AddelemComponent;
  let fixture: ComponentFixture<AddelemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddelemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
