import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';            // pour le "two way data bindings" MVVM.
import { HttpModule }    from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { RechercheService } from './Recherche.service';
import { PanierService } from './Panier.service';

import { MenuComponent }        from './Menu.component';
import { RechercheParMarqueComponent }  from './RechercheParMarque.component';
import { RechercheParTypeComponent }  from './RechercheParType.component';
import { RechercheParMarqueSpecifiqueComponent }  from './RechercheParMarqueSpecifique.component';
import { RechercheParTypeSpecifiqueComponent }  from './RechercheParTypeSpecifique.component';

import { PanierComponent }  from './Panier.component';
import { PanierAjoutComponent }  from './PanierAjout.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ MenuComponent, RechercheParMarqueComponent, RechercheParTypeComponent, RechercheParMarqueSpecifiqueComponent, RechercheParTypeSpecifiqueComponent, PanierComponent, PanierAjoutComponent],
  providers:    [ RechercheService, PanierService  ],
  bootstrap:    [ MenuComponent, PanierComponent ]
})

export class AppModule { }
