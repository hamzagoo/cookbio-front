import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';
import { EventsService } from '../events.service';

@Component({
  selector: 'ngx-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: Evenement[] = [
    {
      title: "La Pâtisserie", 
      description: "Macarons, religieuses, financiers, fraisiers… les grands classiques de la pâtisserie n’auront plus de secrets pour vous. Petits plaisirs ou maxi-gourmandise, pour un goûter ou pour épater, il y en a pour tous les goûts.",
      date: "Vendredi 30 mai 2020",
      duration: "45h",
      partipants: [],
      category: "Pâtisserie salée"
    },
    {
      title: "La Pâtisserie", 
      description: "Macarons, religieuses, financiers, fraisiers… les grands classiques de la pâtisserie n’auront plus de secrets pour vous. Petits plaisirs ou maxi-gourmandise, pour un goûter ou pour épater, il y en a pour tous les goûts.",
      date: "Vendredi 30 mai 2020",
      duration: "45h",
      partipants: [],
      category: "Pâtisserie salée"
    }
  ];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
  }

  getEvents(){
    this.eventsService.getAll().subscribe(res =>{
      this.events = res;
    })
  }
  redirectToParticipate(event){

  }
}
