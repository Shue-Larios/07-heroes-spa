import { heroes } from "../data/heroes";


export const getHeroesByPublisher = ( publisher ) =>{

    // aca incluimos solo los q tenemos para evitar poner algo q no
const validPublishers = ['DC Comics', 'Marvel Comics']

// validamos si son los q estamos recibiendo
if (!validPublishers.includes(publisher) ) {
    throw new Error(`${publisher} no existe`)
}

// pero si existe entoncs hacemo un return
return heroes.filter( hero => hero.publisher === publisher );

} 