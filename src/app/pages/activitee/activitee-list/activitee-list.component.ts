import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ActiviteeService } from '../activitie-service';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { MatDialogRef, MatDialog, MatSelectChange } from '@angular/material';
import { NbWindowService } from '@nebular/theme';
import { Activitee } from '../activitee';
import { CategorieService } from '../../categorie/categorie-service';
import { Categorie } from '../../categorie/categorie';

@Component({
  selector: 'ngx-activitee-list',
  templateUrl: './activitee-list.component.html',
  styleUrls: ['./activitee-list.component.scss']
})
export class ActiviteeListComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  isLoad = false;
  allActivities : Activitee[];
  AllActivitesByIdCategories : Activitee[];
  activitee:Activitee = {};
  //categorie : Categorie = {};
  idcategorie : number  ;
  categories : Categorie[] = [];
  //equipes: Equipe[] = [];
  categorie: Categorie = {};


  rowData: any;
  columnDefs = [
    {headerName: 'date', field: 'date'},
    {headerName: 'duree', field: 'duree'},
    {headerName: 'type', field: 'type'},
    {headerName: 'categorie', field: 'categorie.nom'},
  ]
  id: number
  private gridApi: GridApi;
  private columnApi: ColumnApi;
  dialogRef: MatDialogRef<any, any>;
 
  
  constructor(public dialog: MatDialog,private activitieService:ActiviteeService,private router: Router,
              private windowService: NbWindowService,private categorieService : CategorieService) { 

               this.AllActivitesByIdCategories = new Array<Activitee>();
               this.allActivities = new Array<Activitee>();
               this.activitee.categorie ={}
               this.categorie.id = null;
             this.categorie.nom = 'TOUS';
             this.categorie.listActivitee = [];   
             this.getCategories();
  }

  getCategories() {
    this.categorieService.getAllCategorie()
      .subscribe(data => {
        this.categories = data;
        this.categories.push({id: null, nom: 'TOUS', listActivitee: []});
      });
  }

  onSelectCategorie(c) {
    this.categorie = c;
    this.listActivitee();

  }
              
  listActivitee(){
    if (this.categorie.id === null) {
      this.activitieService.getAllActivitee().subscribe((activites) => {
          this.rowData = activites;

      },
          error => {
              console.log('Échec du chargement des activites.' + error);
          });} else {
            this.activitieService.getAllActiviteeByCategorie(this.categorie.id).subscribe((categories) => {
              this.rowData = categories;

          },
              error => {
                  console.log('Échec du chargement des activites.' + error);
              });}
  }

  Supprimer(){
    this.activitieService.deleteActivitee(this.id).subscribe(
      (rep) => {
        console.log("Tentative de suppression d'une Activitee' ...");
        this.onNoClick();
        this.listActivitee();
      },
      err => {
        console.log("Erreur de suppression d'une Activitee'"+err);
      }
    );
  }
actualiser(){
  this.isLoad = false;
  this.listActiviteeAll();
  this.isLoad = true;

}
  listActiviteeAll(){
      this.activitieService.getAllActivitee().subscribe((activites) => {
          this.rowData = activites;

      },
          error => {
              console.log('Échec du chargement des activites.' + error);
          });
  }
  getListOfCategries() {
    this.categorieService.getAllCategorie().subscribe(
     (rep)=>{
       this.categories = rep
     },
     err => {
      console.log("Erreur de chargement des societes"+err);
    }
    );

  }

  ngOnInit() {
    this.getListOfCategries();
    this.listActivitee();
  }

  goToAdd(){
    this.router.navigate(['./pages/parametre-generaux/activitee/add']);
  }
  goToUpdate(){
    this.router.navigate(['./pages/parametre-generaux/activitee/update/'+this.id]);
  }

onGridReady(params): void {
  this.gridApi = params.api;
  this.columnApi = params.columnApi;
  this.gridApi.sizeColumnsToFit();
}

  onSelectionChanged(event) {
    var selectedRows = event.api.getSelectedRows();
    var selectedRowsString = null;
    selectedRows.forEach( function(selectedRow, index) {
        if (index!==0) {
            selectedRowsString += ', ';
        }
        selectedRowsString += selectedRow.id;
    });
    this.id = selectedRowsString;
    this.rowData.forEach(element => {
      if(element.id ==  this.id) {
        this.activitee = element;
      }
    });
    console.log("id : "+this.id )
}

quickSearchValue: string = '';
public onQuickFilterChanged() {
  this.gridApi.setQuickFilter(this.quickSearchValue);
}

downloadPDF(){
  /*
  let doc = new jsPDF();

  let specialElementHandlers = {
    '#editor': function(element,renderer){
      return true;
    }
  };

  let content = this.content.nativeElement;

  doc.fromHTML(content.innerHTML,15,15,{
    'width' :190,
    'elementHandlers': specialElementHandlers
  });

  doc.save('AllActivites.pdf');
  */
}


open(dialog: TemplateRef<any>) {
    
  this.dialogRef = this.dialog.open(
    dialog,
    { width: '250px',
      data: 'confirmer la suppression !!' });

      this.dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
}
onNoClick(): void {
  this.dialogRef.close();
}

openWindow(contentTemplate) {
  this.windowService.open(
    contentTemplate,
    {
      title: "d'etails d'activitee",
      context: {
        text: 'some text to pass into template',
      },
    },
  );
}
}
