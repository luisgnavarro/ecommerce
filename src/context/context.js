import { createContext, useContext, useReducer } from "react";
import { initialState,AuthReducer } from "./reducer";

const AuhtStateContext = createContext();  // contiene el token de autehtiacion y detalles del usuario
const AuthDispatchContext = createContext(); // pasa el metodo de envie que nos da reducer para administrar el esdtado de los componentes que lo necesiten

//se crean hooks personalizados y se lanzan erroresen caso que esos se encuentran fuera de un proveedor
export function useAuthState(){
    const context = useContext(AuhtStateContext)
    if (context === undefined){
        throw new Error('useAuthState no definido, necesita de un proveedor')
    }
    return context
}

export function useAuthDispatch(){
    const context = useContext(AuthDispatchContext)
    if (context === undefined){
        throw new Error('useAuthDispatch no definido, necesita de un proveedor')
    }
    return context
}

//creamos un proveedor perzonalizado llamado authprovider, que provee el contexto a toda la apliación
//esta funcion es nuestra administración del estado usando, usereducer. devuelve un objeto de estado de usuario y un metodo

export const AuthProvider = (children) => {
    const [usuario, dispatch] = useReducer(AuthReducer, initialState)

    return(
        <AuhtStateContext.Provider value = {usuario}>
            <AuthDispatchContext.Provider value = {dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuhtStateContext.Provider>
        
    )
}