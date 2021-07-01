import React, { useEffect, useState } from 'react';
import CarritoCard from '../secciones/CarritoCard';


const Cart = () => {
  
    // const [nombreVariable, nombreMetodoQueActualiza] = useState(valorInicialVariable)
    const [arts, setArts] = useState([]);
    const [cargando, setCargando] = useState(true);
    console.log(' C A R T ');

    // función que hace petición a la API Giphy para traernos gifs
    const getArts = () => {
        setCargando(true);
      
        console.log('soy la función getArts');
        const URL = 'https://megastore-bb279-default-rtdb.firebaseio.com/carro.json';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {

                setArts(respuesta);
                console.log('cart-art', respuesta);
            });
    }

   // FUNCION ELIMINAR de carrito
  
    const removeFromCart = (idArt) => {
        console.log('borrando', idArt);
        const URL = `https://megastore-bb279-default-rtdb.firebaseio.com/carro/${idArt}.json`;
        

        fetch(URL,{method: 'DELETE',})
            .then(body => body.json())
            .then(respuesta=>{
                // console.log(respuesta);
                // alert('articulo agregado correctamente');
                getArts();
            }
                )  

    }
    


    // ciclo de vida ** Pendiente
    useEffect(() => {
        // Se ejecuta una vez cuando el componente se rendiriza
        getArts();
    }, []);


    return (
        <div className="container">
                        
            <div className="d-flex flex-wrap">
                {
                   arts !== null ? 
                    Object.keys(arts).map(id =>
                        
                        <CarritoCard 
                            titulo={arts[id].titulo}
                            descripcion={arts[id].descripcion}
                            precio={arts[id].precio}
                            imagen={arts[id].image}
                            categoria={arts[id].categoria}
                            marca={arts[id].marca}
                            // iden ={arts[id]._id}
                            key={arts[id].iden}
                            cantidad =     {arts[id].cant} 
                            removeFromCart = {removeFromCart} 
                            idArt = {id}                   
                        />):
                        <h1>Carrito Vacio</h1>
                }
           
            </div>
           
        </div>
    )
}

export default Cart