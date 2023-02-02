import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

 //  ya no era necesaria dspues del localStorage
  // const initialState = {
  //     logged: false,
  // }

  // inicio lectura del localStorage
  // funcion de inicializar
const init = () => {
    // si eso regresa null es xk no hay un usuario

  const user = JSON.parse( localStorage.getItem('user') );

  return {
      // si es user existe pongo doble negacion entoncs va a star en true

    logged: !!user,
      // si existe mando el user

    user: user,
  }
}


export const AuthProvider = ({ children }) => {
    
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }
    // almaceno el usuario en localStorage

    localStorage.setItem('user', JSON.stringify( user ) );

    dispatch(action);
  }
  // funcion de logout

  const logout = () => {
    // limpio lo almacenado en el localStorage

    localStorage.removeItem('user');
    // el dispatch es quien espera la accion que va a limpiarlo

    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState,

      // Methods
      login,
      logout,
    }}>
        { children }
    </AuthContext.Provider>
  );
}
