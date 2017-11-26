import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheParMarqueComponent }  from './RechercheParMarque.component';
import { RechercheParTypeComponent }  from './RechercheParType.component';
import { RechercheParMarqueSpecifiqueComponent }  from './RechercheParMarqueSpecifique.component';
import { RechercheParTypeSpecifiqueComponent }  from './RechercheParTypeSpecifique.component';
import { PanierComponent }  from './Panier.component';
import { PanierAjoutComponent }  from './PanierAjout.component';


const appRoutes: Routes = [
  { path: 'rechercheParMarque', component: RechercheParMarqueComponent },
  { path: 'rechercheParType', component: RechercheParTypeComponent },
  { path: 'rechercheParMarqueSpecifique/:marque', component: RechercheParMarqueSpecifiqueComponent },
  { path: 'rechercheParTypeSpecifique/:type', component: RechercheParTypeSpecifiqueComponent },

  { path: 'panier', component: PanierComponent },
  { path: 'ajoutProduit/:id/:nom/:prix/:stock', component: PanierAjoutComponent },
];

export const appRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
