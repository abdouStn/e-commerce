import { Injectable } from '@angular/core' ;
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx' ;
import 'rxjs/add/operator/map';

@Injectable()
export class PanierService {
    constructor(private http :Http) {}

    insertData(parametres :string) :Observable<any> {
        let url :string = "http://localhost:8888/panier/"+parametres ;
        let observable :Observable<any> = this.http.get(url)
                                            .map((res:Response) => res.json());
        return observable ;
    }

    getData(parametres :string) :Observable<any> {
        let url :string = "http://localhost:8888/panier/"+parametres ;
        let observable :Observable<any> = this.http.get(url)
                                            .map((res:Response) => res.json());
        return observable ;
    }
}
