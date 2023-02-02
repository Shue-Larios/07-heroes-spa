import { heroes } from "../data/heroes";


// recibimos un parametro sino q lo ponga vacio
export const getHeroesByName = (name = '') => {


    // si tenemos un nombre hace esto 
    name = name.toLocaleLowerCase().trim();


    // decimo q si viene cero esq no se busco nada
    if ( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name ) 
    );


}
