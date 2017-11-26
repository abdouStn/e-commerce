import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { RechercheService } from './Recherche.service' ;

@Component({
    templateUrl: 'templates/RechercheParTypeSpecifique.html',
    //styleUrls:   ['styles/RechercheParTypeSpecifique.css']
})

export class RechercheParTypeSpecifiqueComponent {
    public items :any ;
    public type :string ;

    public constructor(private recherche :RechercheService, private route:ActivatedRoute){
        this.route = route;
        this.route.params
            .map(params => params['type'])
            .subscribe(type => this.type = type);
    }

/* A priori on ne met que l'initiation des attributs dans le constr, le reste des traitements doit se faire dans la fonction ngOnInit() ou ngDoCheck()*/
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recherche.getJSON("type/"+params['type'])    //appel du service
                    .subscribe(res => this.items = res,
                            err => console.error(err),
                            () => console.log('done'));
        });
    }
}
