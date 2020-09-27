import { Component, OnInit } from '@angular/core';
import { ActiviteeService } from '../activitie-service';
import { Location } from '@angular/common';
import { Activitee } from '../activitee';
import { CollaborateurService } from '../../collaborateur/collaborateur.service';
import { societeService } from '../../societes/societe.service';
import { Societe } from '../../societes/societe';
import { Collaborateur } from '../../collaborateur/collaborateur';
import { CollaborateurActivitee } from '../collaborateur-Activitee';
import { CategorieService } from '../../categorie/categorie-service';
import { Categorie } from '../../categorie/categorie';

@Component({
  selector: 'ngx-activitee-add',
  templateUrl: './activitee-add.component.html',
  styleUrls: ['./activitee-add.component.scss']
})
export class ActiviteeAddComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  dropdownList2 = [];
  selectedItems2 = [];
  dropdownSettings2 = {};
  public listeCategories: any
  public categoriees = []
  public categorie:Categorie={};
  

  public societes:Societe[];
  societe:Societe={};
  ListCollaborateur =Array<Collaborateur>();
  collaborateurs = [];
  collaborateurActivite : CollaborateurActivitee = {};
  idEtablissement : number;
  public activitee:Activitee= {};

  list = Array<CollaborateurActivitee>();

  constructor(private collaborateurService:CollaborateurService,
    private societeService:societeService ,
    private location: Location,
    private activiteeService:ActiviteeService,private categorieService: CategorieService) { 
      
      this.activitee.collaborationActivitee = new Array();
      this.ListCollaborateur = new Array();
      this.list = new Array();
    }
  
  getListOfSocietes() {
    this.societeService.getAllSocietes().subscribe(
      (rep)=>{
        this.societes = rep
      },
      err => {
      console.log("Erreur de chargement des societes"+err);
    }
    );

  }
    getListCollaborateur() {
      this.societeService.getAllSocietes().subscribe(
        list => this.societes = list,
        err => console.log("Erreur de chargement des societes"),
        () => {
          this.societe = this.societes.find(us => us.id == this.idEtablissement);
         
        }
      );

    }
  onSelectSociete(){
    this.idEtablissement = this.societe.id;
    console.log(">> id societe"+this.idEtablissement);
    this.getAllCollaborateur()
  }

  getAllCollaborateur(){
    this.collaborateurService.getAllCollaborateur(4).subscribe( //a remplacer par this.idEtablissement , 4 c'est juste pour faire des teste
      (rep) => {
        this.ListCollaborateur=rep;
        this.ListCollaborateur.forEach(element => {
         this.collaborateurs.push({item_id: element.id ,item_text :element.nom });
        });
        this.dropdownList = this.collaborateurs
      },

      err => {
        console.log("Erreur de recuperation de données"+err);
      }
      );
    
  }

  add(){
    this.activiteeService.addActivitee(this.activitee).subscribe(
      (data:Activitee) =>{
        console.log(data);
        this.activitee={};
        this.gotoBack();
      },
      (error: any) => { console.log(error); }
    )
  }

  getAllCategories(){
    this.categorieService.getAllCategorie().subscribe(
      (rep) => {
        this.listeCategories=rep;
        this.listeCategories.forEach(element => {
         this.categoriees.push({item_id: element.id ,item_text :element.nom });
        });
        this.dropdownList2 = this.categoriees
      },

      err => {
        console.log("Erreur de recuperation de données"+err);
      }
      );
    
  }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
     //itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettings2 = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      //unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getAllCategories();
    this.getListOfSocietes();
  }
  onItemSelect(item: any) {
    this.collaborateurActivite.id=item.item_id;
    console.log("id collaborateur  : "+ this.collaborateurActivite.id);
    this.collaborateurActivite.nom=item.item_text;
    this.list.push(this.collaborateurActivite);

  }
  onSelectAll(items: any) {
    items.forEach(element => {
      this.collaborateurActivite.id=element.item_id;
      this.collaborateurActivite.nom=element.item_text;
      this.collaborateurActivite.idActivite = this.activitee.id;
      this.list.push(this.collaborateurActivite);
      this.collaborateurActivite={}
    });
   
  }
  onItemSelect2(item: any) {
    this.categorie.id=item.item_id;
    this.categorieService.getById(item.item_id).subscribe(
      (rep)=>{
        this.categorie = rep
        this.activitee.categorie= this.categorie
      },err => {
        console.log("Erreur de recuperation de données"+err);
      }
    )
  }

  gotoBack(){
    this.location.back();
  }

}
