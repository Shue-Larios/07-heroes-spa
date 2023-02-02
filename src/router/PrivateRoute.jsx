import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    // para saber si el user esta autenticado o no usamos el usecontext
    const { logged } = useContext(AuthContext);
    // el hook useLocation ofrece varios objetos y nis permite mantener al usuario en la pagina dond se quedo ats de hacer logout
    // el pathname es el nombre d la pagina
    // el search es el query paramert
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    //  agrega al localStorage el nombre con los datos
    localStorage.setItem('lastPath', lastPath);


    return (logged)
    // si el usuario esta autenticado
        ? children
        // sino lo esta
        : <Navigate to="/login" />
}
