import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext( AuthContext)

  const navigate = useNavigate();
  const onLogin = () =>{

    // al final dice si es null lo mandamos a esa pagina
    const lastPath = localStorage.getItem('lastPath') || '/'

    // cuando toquemos ocupamos el dispasch de esa accion
// mando a llamar el login
login('Shue Carcamo');
    // defino mi pagina principal esta esta la toma cuando creo el proyecto dsd el principio
    navigate(lastPath, {
      // esto sirve como proteccion de ruta si le da atras evita regrese a la pagina anterior
      replace: true
  });
  }


  return (
    <div className="container mt-5">
<h1> Login</h1>
<hr />
<button className="btn btn-outline-primary"
onClick={ onLogin }>
  Login
</button>

    </div>
  )
}
