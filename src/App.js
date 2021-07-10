import React, { useState} from 'react';
import Navbar from "./secciones/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from "./secciones/Cart";
import SignIn from "./secciones/SignIn";
import SignUp from "./secciones/SignUp";
import Main from "./secciones/Main";
import {AuthProvider} from './context/context';
// import {BuscarProvider,useBusqueda} from './context/busca-context';
// export default () => <BuscarProvider>
//   <App></App>
// </BuscarProvider>
function App() {
  const [searchValue,setSearchValue] = useState('');
  // const [searchValue, setUserSearchValue] = useState('');

  const handleButtonClick = (searchValue) => {
    // setSearchValue(searchValue);
    console.log('App AntesMAin', searchValue);
    alert('Holaaaa');
    Main(searchValue);
    
}
 const onSearch = (busqueda) =>{
   console.log(busqueda);
   setSearchValue(busqueda);
 }

  return (

    <BrowserRouter>
    <Navbar
        onButtonClick={handleButtonClick}
        onSearch = {onSearch}
    />
      <Switch>
         <Route exact path= "/" component={Main}/>
        {/* <Route exact path= "/Home" component={Main} searchValue={searchValue}/> */}
        {/* <Route exact path= "/Home" render={(props)=>(<Main {...props} searchValue={searchValue}/>)} /> */}
        <Route exact path= "/Home" component={()=>(<Main searchValue="hola"/>)} /> 
        <Route exact path= "/Cart" component={Cart}/>
        <Route exact path="/Signin" component={SignIn}/>
        <Route exact path="/Signup" component={SignUp}/>
      </Switch>
    </BrowserRouter>
  
    
  );
}

export default App;


