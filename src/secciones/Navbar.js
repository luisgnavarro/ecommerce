import React, {useState} from 'react';




// const Navbar = () => {
    const Navbar = ({ onButtonClick , onSearch}) => {

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
                        {/* <form className="d-flex" method="post" action="Buscar"> */}
                        <form className="d-flex">
                            <input className="form-control me-2" onChange={(e) => {
                                onSearch(e.target.value)
                                setSearchValue(e.target.value)}} type="search" placeholder="Search" aria-label="Search" id="valor" ></input>
                            {/* <button className="btn btn-outline-success" type="submit" >Search</button> */}
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
