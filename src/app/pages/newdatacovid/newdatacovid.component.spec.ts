import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdatacovidComponent } from './newdatacovid.component';

describe('NewdatacovidComponent', () => {
  let component: NewdatacovidComponent;
  let fixture: ComponentFixture<NewdatacovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdatacovidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdatacovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
