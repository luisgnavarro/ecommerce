import Navbar from "./secciones/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from "./sections/Cart";
import SignIn from "./sections/SignIn";
import SignUp from "./sections/SignUp";
import Main from "./secciones/Main";


function App() {
  return (
    // BrowserRouter nos ayuda a establecer un componente como la raíz de diferentes rutas
    
    <BrowserRouter>
    {/* Componentes fijos */}
   
      <Navbar/>
      
     
      
      {/* Switch encapsula los componentes o secciones que estarán cambiando de acuerdo a la ruta */}
      <Switch>
        {/* Definir un componente por ruta */}

        <Route exact path= "/" component={Main}/>
        <Route exact path= "/Home" component={Main}/>

        <Route exact path= "/Cart" component={Cart}/>

        {/* Definir un componente por ruta */}
        <Route exact path="/Signin" component={SignIn}/>

        {/* Definir un componente por ruta */}
        <Route exact path="/Signup" component={SignUp}/>

      </Switch>

      
    {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;


