import React, { useState } from 'react';
import Navbar from "./secciones/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from "./secciones/Cart";
import SignIn from "./secciones/SignIn";
import SignUp from "./secciones/SignUp";
import Main from "./secciones/Main";
import NotFound from './secciones/NotFound';
import Profile from './secciones/Profile';
import { AuthProvider } from './context/Auth';
import Logout from './secciones/Logout';


function App() {
  const [searchValue, setSearchValue] = useState('');
 
  const handleButtonClick = (searchValue) => {
   
    Main(searchValue);

  }
  const onSearch = (busqueda) => {
    console.log("app",busqueda);
    setSearchValue(busqueda);
    
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar
          onButtonClick={handleButtonClick}
          onSearch={onSearch}
        />
        <Switch>

          <Route exact path="/Home" component={Main} searchValue={searchValue} />
          {/* <Route exact path="/Cart" component={Cart}  /> */}
          <Route exact path="/Cart" render={(props) => (<Cart {...props} searchValue={searchValue} />)} />
         
          <Route exact path="/Signin" component={SignIn} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/Logout" component={Logout} />
        
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/" render={(props) => (<Main {...props} searchValue={searchValue} />)} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
     </AuthProvider>


  );
}

export default App;