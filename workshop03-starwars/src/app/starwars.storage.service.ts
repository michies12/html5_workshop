import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { People } from './models';

@Injectable()
export class StarWarsDatabaseService {

    private db: Dexie;

    constructor() {
        this.db = new Dexie('swdb');
        this.db.version(1).stores({
            people: "id, image, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url"
        })
    }

    find(id: number): Promise<People> {
        console.log('id === ', id);
        const p = new Promise<People>((resolve, reject) => {
            this.db['people'].where('id').equals(id)
                .toArray()
                .then((result: People[]) => {
                    if (result.length > 0)
                        resolve(result[0])
                    else
                        reject(id);
                })

        });
        return (p);
    }

    save(data: People): Promise<number> {
        return (
            this.db['people'].put(data)
        );
    }
}