import React, { useContext, useState } from "react";
import app from '../context/base';
import { AuthContext } from '../context/Auth';

// let wishObj = {};
let usuario = "";
let foto = "";
let correo = "";

const Profile = () => {

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [fotoURL, setFotoURL] = useState('');
    const { currentUser } = useContext(AuthContext);
    


    const actualizarDatos = (nombreUsuario, fotoURL) => {
        // const user = app.auth().currentUser;
        console.log("profile....entrando..", nombreUsuario, fotoURL)

        const update = {
            displayName: nombreUsuario,
            photoURL: fotoURL,
        };

        app.auth().currentUser.updateProfile(update);

    }


    usuario = ""; foto = "";
    if (currentUser !== null) {
        let uid = app.auth().currentUser.uid;
        let wishObj = {
            user: {
                uid,
                displayName: app.auth().currentUser.displayName || '',
                photoURL: app.auth().currentUser.photoURL || '',
                email: app.auth().currentUser.email || '',
            }
        };
        // console.log("profile---wwwww",wishObj);
        usuario = wishObj.user.displayName;
        foto = wishObj.user.photoURL;
        correo = wishObj.user.email;
    }


    return (
        <div className="container">
            <div className="row ">
                <div className="col-12">
                    <h1>{usuario==="" ? usuario :"cargando..."}</h1>
                    <h3 className="text-center">Mi Perfil</h3>
                    <h1 className="text-center">{usuario}</h1>
                    <h5 className="text-center">{correo}</h5>
                </div>
            </div>
            <div className="row p-2 bg-light border">
                <div className="col-4"></div>
                <div className="col-4">
                    <img src={foto} alt="perfil" width="250px" height="auto"></img>
                </div>
            </div>
            <div className="row p-2 bg-light border">
                <div className="col-12">
                    <form className="d-flex">
                        <input className="form-control me-2" onChange={(e) => {
                            // onSearch(e.target.value)
                            setNombreUsuario(e.target.value)
                        }} type="text" placeholder="Nombre" aria-label="Search" id="nombre"
                        ></input>
                        <input className="form-control me-2" onChange={(e) => {
                            // onSearch(e.target.value)
                            setFotoURL(e.target.value)
                        }} type="text" placeholder="fotoURL" aria-label="Search" id="foto"
                        ></input>

                        <button className="btn btn-outline-success" type="submit"
                            onClick={() => actualizarDatos(nombreUsuario, fotoURL)}
                        >Actualizar datos</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Profile