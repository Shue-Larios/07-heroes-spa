// Este es el nombre que se le pone al principal router

import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="login" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            
             {/* esta son las rutas q ocupo proteger */}
        {/* aca dice que cualquier ruta q no sea el login pase por el */}
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
            
            

        </Routes>
    
    </>
  )
}
