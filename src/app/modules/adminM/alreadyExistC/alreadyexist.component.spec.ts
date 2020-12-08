import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyexistComponent } from './alreadyexist.component';

describe('AlreadyexistComponent', () => {
  let component: AlreadyexistComponent;
  let fixture: ComponentFixture<AlreadyexistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlreadyexistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
