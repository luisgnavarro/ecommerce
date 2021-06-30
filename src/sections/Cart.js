import React, { useEffect, useState } from 'react';
import CarritoCard from '../secciones/CarritoCard';


const Cart = () => {
    const busqueda = '';
    // const [nombreVariable, nombreMetodoQueActualiza] = useState(valorInicialVariable)
    const [arts, setArts] = useState([]);
    const [cargando, setCargando] = useState(true);


    // función que hace petición a la API Giphy para traernos gifs
    const getArts = () => {
        setCargando(true);
        console.log('busqueda', busqueda);
        console.log('soy la función getArts');

        
        busqueda = busqueda ? busqueda : 'Demo';
        // variable = condicion ? valor verdadero : Valor Falso;


        const URL = 'https://megastore-bb279-default-rtdb.firebaseio.com/carro.json';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {

                setArts(respuesta);
                console.log(respuesta);
            });
    }

    // ciclo de vida ** Pendiente
    useEffect(() => {
        // Se ejecuta una vez cuando el componente se rendiriza
        getArts();
    }, []);


    return (
        <div className="container">
            {/* <h3>Selecciona los articulos de tu preferencia</h3> */}
           
            
            <div className="d-flex flex-wrap">
                {
                    Object.keys(arts).map(id =>
                        
                        <CarritoCard 
                            titulo={arts[id].product_name}
                            descripcion={arts[id].description}
                            precio={arts[id].price}
                            imagen={arts[id].image}
                            categoria={arts[id].category}
                            marca={arts[id].brand}
                            iden ={arts[id]._id}
                            key={arts[id]._id}
                            cantidad =     {arts[id].cantidad}                     
                        />)
                }
            </div>
           
        </div>
    )
}

export default Cart