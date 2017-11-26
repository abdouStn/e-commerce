//import {FormBuilder, ControlGroup, Control, Validators} from '@angular/common';
//import {Article} from './article';
import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { PanierService } from './Panier.service' ;
import {Router} from '@angular/router';

@Component({
  selector: 'panier',
  templateUrl: 'templates/panier.html'
})

export class PanierComponent
{
    public panier :any ; //liste

    private total :number ;
    private router :Router;

    public constructor(private panierService :PanierService, private route:ActivatedRoute, router: Router){
        this.route = route;
        this.router = router;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.panierService.getData("liste")    //appel du service
                    .subscribe(res => this.panier = res,
                            err => console.error(err),
                            () => console.log("done "));
            });

        this.updateTotal();
    }

    updateTotal() {
        this.total = 0;
        console.log("================");
        /*for(let element of this.panier) {
            console.log("================");
            console.log(element.quantite);
            this.total = this.total + (Number(element.prix) * Number(element.quantite));
        }*/
    }
}
