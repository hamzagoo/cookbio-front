import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';
import { EventsService } from '../events.service';

@Component({
  selector: 'ngx-events-participate',
  templateUrl: './events-participate.component.html',
  styleUrls: ['./events-participate.component.scss']
})
export class EventsParticipateComponent implements OnInit {

  event: Evenement;
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
  }

}
