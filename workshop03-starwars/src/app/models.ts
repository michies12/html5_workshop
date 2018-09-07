export interface People {
    //Additional field
    id: number; //Primary key
    //https://starwars-visualguide.com/assets/img/characters/88.jpg
    image: string;

    //Fields from swapi.co
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}