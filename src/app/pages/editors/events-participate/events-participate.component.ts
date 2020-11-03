import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'app/@core/models/participant';
import { Evenement } from '../evenement';
import { EventsService } from '../events.service';

@Component({
  selector: 'ngx-events-participate',
  templateUrl: './events-participate.component.html',
  styleUrls: ['./events-participate.component.scss']
})
export class EventsParticipateComponent implements OnInit {

  event: Evenement;
  participant: Participant = new Participant();
  id: string;
  constructor(private eventService: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(){
    this.id = this.route.snapshot.paramMap.get('id') ;
    console.log(this.id)
    this.eventService.get(this.id).subscribe(res => {
      this.event = res;
      console.log(res)
    })
  }

  save(){ 

  }
}
