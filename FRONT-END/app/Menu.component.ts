import {Component} from '@angular/core';

@Component({
    selector:    'menu',
    templateUrl: 'templates/menu.html',
    //styleUrls:   ['styles/menu.css']
})
export class MenuComponent {
    titre = 'Recherches';
    marque :string = 'Apple';				//par defaut??
    type :string;

    setMarque( value :string) {
      //console.log("Dans Menu avec "+value);
      this.marque = value;
      this.type = value;
   }
}
