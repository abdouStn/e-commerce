import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { PanierService } from './Panier.service' ;
import {Router} from '@angular/router';

@Component({
    templateUrl: 'templates/menu.html',
})

export class PanierAjoutComponent {
    private router :Router;
    public items :any;
    private id :string

    public constructor(private panierService :PanierService, private route:ActivatedRoute, router: Router){
        this.router = router;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.panierService.insertData("ajout/"+params['id']+"/"+params['nom']+"/"+params['prix']+"/"+params['stock'])    //appel du service
                    .subscribe(res => this.items = res,
                            err => console.error(err),
                            () => console.log('done'));
        });
        this.router.navigate(['/rechercheParMarque']);
    }
}
