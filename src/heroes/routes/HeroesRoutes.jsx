 import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../interface"; // para importar todo lo q esta dentro de est carpeta agregado al index
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar /> 
    
    <div className="container">
    <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
      {/* llegamos a la pagina y agregamos al url el id para dspues poer leer dsd ahi */}
        <Route path="hero/:id" element={<HeroPage />} />
 
{/* faltan Search, hero by id */}

{/* en el caso que no tengamos ninguna ruta */}
<Route path="/" element={<Navigate to="/marvel" />} />

      </Routes>


    </div>

    </>
  )
}
