import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { RechercheService } from './Recherche.service' ;

@Component({
    templateUrl: 'templates/RechercheParType.html',
    //styleUrls:   ['styles/RechercheParType.css']
})
export class RechercheParTypeComponent {
    public items :any;

    public constructor(private recherche :RechercheService, private route:ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recherche.getJSON("type")    //appel du service
                    .subscribe(res => this.items = res,
                            err => console.error(err),
                            () => console.log('done'));
        });
    }

}
