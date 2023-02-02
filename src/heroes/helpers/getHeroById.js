import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
    // si existe lo regresa sino retorna un undefined y trae toda la informacion 
  return heroes.find(hero =>hero.id === id);
}
