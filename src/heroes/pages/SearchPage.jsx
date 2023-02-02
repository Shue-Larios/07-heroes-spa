import { useLocation, useNavigate } from 'react-router-dom';
import { useFrom } from '../../hooks/useFrom'
import { HeroCard } from '../components'
import queryString from 'query-string'; // importamos el paquete e intalamos
import { getHeroesByName } from '../helpers';


/////////////////
// aca instalamos el paquete de yarn add query-string para leer bien la url
////////////////

export const SearchPage = () => {

  const navigate = useNavigate();

  // para obtener el query parameter q agregamos a la URL
  const location = useLocation()

  //  para extraer todo lo q se encuentra en el search del url
  // desestructuro el query para obtener solo lo q tengo y si no esta q mande vacio
  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q);

const showSearch = (q.length === 0); // esto ya me regresa un true y false
const showError = (q.length > 0) && heroes.length ===0;

  // manejo del formulario paso 2
  // searchText es el name dl input
  const { searchText, onInputChange } = useFrom({
    searchText: q
  });

  // manejo del formulario paso 3
  const onSearchSubmit = (event) => {
    // esto nos ayuda para evitar el refresh del navegador
    event.preventDefault();

    if (searchText.trim().length <= 1) return;
    //  console.log(searchText);
    //  esto lo hacemos para mandar un parametro x la URL se le llama query parameter
    // El método toLowerCase devuelve el valor de la cadena convertida a minúsculas.
    navigate(`?q=${searchText.toLocaleLowerCase().trim()}`)

  }






  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} >
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} />
          </form>
          <button className="btn btn-outline-primary mt-1"> Search</button>
        </div>

        {/* con este div mostramos los resultados de la busqueda */}
        <div className="col-7">
          <h4> Results</h4>
          <hr />
          <div className="alert alert-primary animate__animated animate__fadeIn" 
          style={{ display: showSearch ? '': 'none' }}>
            Search a hero
          </div>

          {/* esta es una alerta x si no encuentra lo q se busca */}
          <div className="alert alert-danger animate__animated animate__fadeIn" 
          style={{ display: showError ? '' : 'none' }}>
            {/* esta q es la del query parameter */}
            No hero with <b> {q} </b>
          </div>

          {/* <HeroCard/> */}
          {/* // HeroCard creamos la card en base a la cantidad q tenemos */}
          {
            heroes.map(hero => (
              <HeroCard key={hero.id}
                {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
