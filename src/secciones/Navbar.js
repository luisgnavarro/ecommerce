import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import app from '../context/base';
import { AuthContext } from '../context/Auth';


let esconder = "block";
let esconder2 = "block";
let esconder3 = "block";
let usuario = "";



const Navbar = ({ onButtonClick, onSearch }) => {

    const [searchValue, setSearchValue] = useState('');

    const location = useLocation();
    // console.log("Nav-loc",location.pathname);
    if (location.pathname === "/Cart" || location.pathname === "/Profile" || location.pathname === "/Logout"
        || location.pathname === "/SignIn" || location.pathname === "/SignUp") {
        esconder = "none";
        // console.log("esconder", esconder)
    }

    const { currentUser } = useContext(AuthContext);
    esconder2 = "none"; esconder3 = "block";
    // console.log(currentUser.email);


    if (currentUser) {
        esconder2 = "none"
        esconder3 = "block"
    } else {
        esconder3 = "none"
        esconder2 = "block"
    }
    usuario = "Da click aqui para comenzar"; 
    if (currentUser !== null){
    let uid = app.auth().currentUser.uid;
    let wishObj = {
      user: {
        uid,
        displayName: app.auth().currentUser.displayName || '',
        photoURL: app.auth().currentUser.photoURL || '',
        email: app.auth().currentUser.email || '',
      }};
    //   console.log("WWWSS",wishObj);
      usuario = wishObj.user.displayName;
    //   foto = wishObj.user.photoURL;
    // console.log("usuario",usuario);
} 

    return (

        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="/"> <a className="nav-link active" aria-current="page" href="/">MegaSStore</a></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="login.png" alt="cart" width="30" height="24" ></img>{usuario}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/SignIn" style={{ display: esconder2 }}>Sign In</a></li>
                                    <li><a className="dropdown-item" href="/SignUp" style={{ display: esconder2 }}>Sign Up</a></li>
                                    <li><a className="dropdown-item" href="/Logout" style={{ display: esconder3 }}>Log Out</a></li>
                                    <li><hr className="dropdown-divider" style={{ display: esconder3 }} ></hr></li>
                                    <li><a className="dropdown-item" href="/Profile" style={{ display: esconder3 }}>Perfil</a></li>
                                </ul>
                            </li>
                        </ul>


                        <a className="navbar-brand" href="/Cart">
                            <img src="cart.jpg" alt="cart" width="30" height="24" ></img>
                        </a>

                        <form className="d-flex">
                            <input className="form-control me-2" onChange={(e) => {
                                onSearch(e.target.value)
                                setSearchValue(e.target.value)
                            }} type="search" placeholder="Search" aria-label="Search" id="valor"
                                style={{ display: esconder }} ></input>

                            <button className="btn btn-outline-success" type="submit"
                                onClick={() => onButtonClick(searchValue)}
                                style={{ display: esconder }} >Search</button>

                        </form>

                    </div>
                </div>

            </nav>
            {usuario}
        </div>

    )



}

export default Navbar
