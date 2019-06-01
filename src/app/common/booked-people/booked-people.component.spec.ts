import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPeopleComponent } from './booked-people.component';

describe('BookedPeopleComponent', () => {
  let component: BookedPeopleComponent;
  let fixture: ComponentFixture<BookedPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
