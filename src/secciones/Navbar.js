import React, { useState } from 'react';



// const Navbar = () => {
const Navbar = ({ onButtonClick, onSearch }) => {

    const [searchValue, setSearchValue] = useState('');

    // const [uso, setUso] = useState('')

    // const handleText =(event)=>{
    //     setUso(event.target.value)
    //  }
    

    return (
        <div>
            {/* <nav className="navbar navbar-light bg-success">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 fs-1">Luis' Store</span>
                </div>
            </nav> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"position":"fixed"}}>*/}
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
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="login.png" alt="cart" width="30" height="24" ></img>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/SignIn">Sign In</a></li>
                                    <li><a className="dropdown-item" href="/SignUp">Sign Up</a></li>
                                    <li><a className="dropdown-item" href="/Logout">Log Out</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="/Profile/DEFINIR">Perfil</a></li>
                                </ul>
                            </li>
                        </ul>     
                       
                        
                        <a class="navbar-brand" href="/Cart">
                            <img src="cart.jpg" alt="cart" width="30" height="24" ></img>
                        </a>

                        <form className="d-flex">
                            <input className="form-control me-2" onChange={(e) => {
                                onSearch(e.target.value)
                                setSearchValue(e.target.value)
                            }} type="search" placeholder="Search" aria-label="Search" id="valor" ></input>

                            <button className="btn btn-outline-success" type="submit" onClick={() => onButtonClick(searchValue)}>Search</button>
                            
                        </form>

                    </div>
                </div>
                {/* <p>{searchValue}</p> */}
            </nav>

        </div>

    )



}

export default Navbar
