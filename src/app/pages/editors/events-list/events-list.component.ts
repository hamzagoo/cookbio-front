import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      id: 1,
      title: "La Pâtisserie", 
      description: "Macarons, religieuses, financiers, fraisiers… les grands classiques de la pâtisserie n’auront plus de secrets pour vous. Petits plaisirs ou maxi-gourmandise, pour un goûter ou pour épater, il y en a pour tous les goûts.",
      date: "Vendredi 30 mai 2020",
      duration: "45h",
      participants: [],
      category: "Pâtisserie salée"
    },
    {
      id: 2,
      title: "La Pâtisserie", 
      description: "Macarons, religieuses, financiers, fraisiers… les grands classiques de la pâtisserie n’auront plus de secrets pour vous. Petits plaisirs ou maxi-gourmandise, pour un goûter ou pour épater, il y en a pour tous les goûts.",
      date: "Vendredi 30 mai 2020",
      duration: "45h",
      participants: [],
      category: "Pâtisserie salée"
    }
  ];

  constructor(private eventsService: EventsService, private router: Router) {

   }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.eventsService.getAll().subscribe(res =>{
      this.events = res;
    })
  }
  redirectToParticipate(event){
    console.log(event)
      this.router.navigate(['./pages/events/particpate/' + event?.id])
  }
}
