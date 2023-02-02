import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

 
export const HeroList = ( {publisher} ) => {

   const heroes = useMemo( ()=> getHeroesByPublisher( publisher), [ publisher ] );
   

  return (
<div className="row rows-cols-1 row-cols-md-3 g-3">
    {
      // genera toda la lista
        heroes.map( hero => (
           <HeroCard key={ hero.id } 
        //    para mandar el resto de informacion
        // pocas palabras exparso la informacion de hero
        {...hero}
           />
        ))
    }
</div>
  )
}
