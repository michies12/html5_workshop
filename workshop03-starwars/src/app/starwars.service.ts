import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { People } from './models';

const URL = 'https://swapi.co/api/people/';

@Injectable()
export class StarWarsService {

    constructor(private http: HttpClient) { }

    searchPeople(id: number): Promise<People> {
        console.log('search people: ', id);
        //this.http.get(URL + id) //String concatenation
        //Use string interpolation
        return (
            this.http.get<People>(`https://swapi.co/api/people/${id}`)
                .toPromise()
                //enrich the data then return
                .then(result => {
                    result.id = id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                    return (result);
                })
        );
    }
}