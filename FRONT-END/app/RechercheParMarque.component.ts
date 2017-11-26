import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { RechercheService } from './Recherche.service' ;
import {Router} from '@angular/router';

@Component({
    templateUrl: 'templates/RechercheParMarque.html',
    //styleUrls:   ['styles/RechercheParMarque.css']
})
export class RechercheParMarqueComponent {
    private router :Router;
    public items :any ;
    

    public constructor(private recherche :RechercheService, private route:ActivatedRoute, router: Router)
    {
        this.router = router;    // pour pouvoir utiliser la fonction appelComposantRechercheParMarqueSpecifique()
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recherche.getJSON("marques")
                    .subscribe(res => this.items = res,
                            err => console.error(err),
                            () => console.log('done'));
        });
    }

    /*Exemple d'appel d'un composant à partir d'un autre sans passer par le controleur. */
    public appelComposantRechercheParMarqueSpecifique(parametre : string) {
         let link = ['/rechercheParMarqueSpecifique', parametre];
         this.router.navigate(link);
    }

}
