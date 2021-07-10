import React, {context, useContext} from 'react';
// import AuthReducer from './actions'

let user = localStorage.getItem("currentUser")
? JSON.parse(localStorage.getItem("currentUser")).role
: "";

let token = localStorage.getItem("currentUser")
? JSON.parse(localStorage.getItem("currentUser")).token
: "";

//creamos el estado inicial+
//userDEtails es para almacenar el objeto de usuario devuelto por el seridor al iniciar sesion correctamente, intentamos leer el userdetails desde el local storage para mantener el estado de inocio de sesion en todas las pestañas
//token. es para almacenar el token de autenticacion devuelto por el servidor, tambien se conserva el local storage del navegador
//loading: es para almacenr el estad de carga del formulariode inicio de sesion cuando se envia
//errormessage: es para almacenar el mensaje devuelto si falla el inicio de sesion

export const initialState = {
    userDetails : "" || user,
    token: "" || token,
    loading: false, 
    errorMessage: null
}

//creamos la funcion reductora que acepta un initialstate y un objeto de action (type:action_type)

export const AuthReducer=(initialState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "REQUEST_LOGIN":
            return{
                ...initialState,
                loading:true
            }

        case "LOGIN_SUCCESS":
            return{
                ...initialState,
                user: action.payload.role,   // payload tiene los datos
                token: action.payload.token,
                loading:false
            }
            case "LOGOUT":
                return{
                    ...initialState,
                    user:"",
                    token:""
                }
            case "LOGIN_ERROR":
                return{
                    ...initialState,
                    loading: false,
                    errorMessage: action.payload.message
                }
    }
}