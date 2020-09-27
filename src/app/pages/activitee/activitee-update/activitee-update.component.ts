import { Component, OnInit } from '@angular/core';
import { ActiviteeService } from '../activitie-service';
import { ActivatedRoute } from '@angular/router';
import { Activitee } from '../activitee';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-activitee-update',
  templateUrl: './activitee-update.component.html',
  styleUrls: ['./activitee-update.component.scss']
})
export class ActiviteeUpdateComponent implements OnInit {

  public id: number;
  public activitee:Activitee ={};

  constructor(
    private location: Location,
    private activiteeService:ActiviteeService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.data.subscribe(
        (resp)=> {
          this.activitee = resp.maDonnee;
          this.id = resp.maDonnee.id;
          console.log(this.activitee);
        }
      );
  }

  updateActivitee(){
    this.activiteeService.updateActivitee(this.id,this.activitee).subscribe(
      rep => {
        console.log("Tentative de modification de l'activitee ...");

      },
      err => {
        console.log("Erreur de modification de l'activitee"+err);
      },
      () => {
        console.log("Activitee modifié");
        console.log(this.activitee);
        this.goToRetour();
      }
    )
  }

  ngOnInit() {
  }

  goToRetour(){
    this.location.back();
  }
}
