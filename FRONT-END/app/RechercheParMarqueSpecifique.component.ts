import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { RechercheService } from './Recherche.service' ;
import {Router} from '@angular/router';

@Component({
    templateUrl: 'templates/RechercheParMarqueSpecifique.html',
    //styleUrls:   ['styles/RechercheParMarqueSpecifique.css']
})

export class RechercheParMarqueSpecifiqueComponent {
    private router :Router;
    public items :any ;
    public marque :string ;

    public constructor(private recherche :RechercheService, private route:ActivatedRoute, router: Router){
        this.route = route;
        this.route.params
            .map(params => params['marque'])
            .subscribe(marque => this.marque = marque);

        this.router = router;
    }

/* A priori on ne met que l'initiation des attributs dans le constr, le reste des traitements doit se faire dans la fonction ngOnInit() ou ngDoCheck()*/
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recherche.getJSON("marque/"+params['marque'])    //appel du service
                    .subscribe(res => this.items = res,
                            err => console.error(err),
                            () => console.log('done'));
        });
    }

    /*Exemple d'appel d'un composant à partir d'un autre sans passer par le controleur. */
    public appelPanierAjoutComponent(id : string, nom : string, prix : string , stock : string) {
         let link = ['/ajoutProduit/', id, nom, prix, stock];
         console.log(link);
         this.router.navigate(link);
    }
}
