
import React, {  useContext } from 'react';
import { Redirect, withRouter } from 'react-router';
import app from '../context/base';
import { AuthContext } from '../context/Auth';


const Logout = ({history}) => {
   

            const {currentUser} = useContext(AuthContext);
            // console.log("logut....entrando..",currentUser)

            if (currentUser) {
                console.log("logut....saliendo..",currentUser)
                return <Redirect to="/" />;
            }



            app.auth().signOut().then(() => {
                console.log("Logout exitoso")
              }).catch((error) => {
                console.log("error durante Logout")
              });
              
   

    return (
       
        <div className="bg-success">
            <p>...</p>
            <p>...</p>

            <h3>Sesión finalizada</h3>
            {setTimeout(() => {
                // alert('sesion finalizada');
}, 500)}
              <Redirect to="/" />;  
        </div>
        
    );
};


export default withRouter(Logout);