import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsParticipateComponent } from './events-participate.component';

describe('EventsParticipateComponent', () => {
  let component: EventsParticipateComponent;
  let fixture: ComponentFixture<EventsParticipateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsParticipateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
