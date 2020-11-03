import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  
  settings = {
    actions: { add: false, edit: false, delete: true },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      image: {
        title: 'image',
        type: 'html',
        width: '50px',
        style: 'width: 50px;',
        class: 'images-product',
        valuePrepareFunction: (value) => { return '<img  src="../../../assets/images/p1.jpg" style =""></img>' },
        filter: false
      },
      title: {
        title: 'Produit',
      },
      price: {
        title: 'Prix',
        filter: false
      },
      quantity: {
        title: 'Quantité',
      }, 
    },
  };

  data = [];
  constructor() { }

  ngOnInit(): void {

    this.data =  JSON.parse(localStorage.getItem("productsOfCart"));
    console.log("cart", this.data)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
