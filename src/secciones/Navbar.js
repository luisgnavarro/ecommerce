import React from 'react'



const Navbar = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-light bg-success">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 fs-1">Luis' Store</span>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#">Megastore</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/SignIn">Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/SignUp">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Cart">Cart</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
       
    )



}

export default Navbar
