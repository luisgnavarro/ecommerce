import React, {useCallback, useContext} from 'react';
import { Redirect, withRouter } from 'react-router';
import { AuthContext } from '../context/Auth';
import app from '../context/base';

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email,password, nombreUsuario,fotoURL} = event.target.elements;
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/Profile");
                console.log(nombreUsuario.value,fotoURL.value)
                actualizarDatos(nombreUsuario.value,fotoURL.value);
        }catch(error){
            alert(error);
        }
        },[history]);
    
        const {currentUser} = useContext(AuthContext);
        if (currentUser){
            return <Redirect to= "/Profile" />;
        }

        const actualizarDatos = (nombreUsuario,fotoURL) => {
            const update = {
               displayName: nombreUsuario,
               photoURL: fotoURL,
           };

           app.auth().currentUser.updateProfile(update);
}

    return (
        <div className="bg-info">
            <p>...</p>
            <p>...</p>
            
            <h1>Registro (Nuevo usuario)</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />                  
                </label>
                <p></p>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />                  
                </label>
                <p>                </p>
                    <label>
                        Nombre Completo
                        <input name="nombreUsuario" type="text" placeholder="nombre" />
                    </label>
                    <p>                </p>
                    <label>
                        Foto
                        <input name="fotoURL" type="text" placeholder="URL de foto" />
                    </label>
                    <p>                </p>
                   
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);