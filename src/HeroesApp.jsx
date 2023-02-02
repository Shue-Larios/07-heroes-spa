import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

 
 
export const HeroesApp = () => {
  return (
    // esto ahora me va ayudar a compartir la informacion q se encuentra en mi AuthProvider en toda la aplicacion
    <AuthProvider>

    <AppRouter />
    
    
    </AuthProvider>

  )
}
