import { useMemo } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
 

export const HeroPage = () => {

  // useParams para leer parametros desde la URL
  const { id } = useParams();

  // cuando el id cambie se va volver a disparar la funcion  
  const hero = useMemo( () => getHeroById(id), [ id ] );
   

  // custon hooks para cerrar sesion o volver atras
  const navigate = useNavigate()

  const onReturn = () => {
    // con esto volvemos atras pero hay q tener cuidado q puede sacar al usuario d la aplicacion
    navigate(-1);
  }




  // aca seleccionamos la imagen por su id y agregamos extension
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  //  preguntamos sino tenemos un superheroe lo sacamos para evitar errores en consola
  // esto x si ingresan una url mala
  if (!hero) {
    // lo mandamos a una pagina que si exista
    return <Navigate to="/marvel" />
  }



  return (
    <div className="row mt-5">
      {/* div de la imagen */}
      <div className="col-4">
        <img 
        className="img-thumbnail animate__animated animate__fadeInLeft"
          src={heroImageUrl}
          alt={hero.superhero} />
      </div>
      {/* div del text*/}
      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className=" list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>first_appearance:</b> {hero.first_appearance} </li>
        </ul>
        <h5 className="mt-3"> Characters</h5>
        <p> {hero.characters} </p>
        <button onClick={onReturn} className="btn  btn-outline-info">Volver</button>
      </div>

    </div>
  )
}

