import React, { useEffect, useState, useContext } from 'react';
import CarritoCard from './CarritoCard';
import { AuthContext } from '../context/Auth';

let esconder = "none";
let esconder1 = "block";




const Cart = () => {
    const {currentUser} = useContext(AuthContext);
            console.log("cart....entrando..",currentUser)
            esconder = "none"; esconder1 = "block";
            if (currentUser) {
                esconder = "block";
                esconder1 = "none";
            } else {
                esconder1 = "block";
                esconder = "none";
            }
    
    let total = 0;
    // const [nombreVariable, nombreMetodoQueActualiza] = useState(valorInicialVariable)
    const [arts, setArts] = useState([]);
    // const [cargando, setCargando] = useState(true);
    // console.log(' C A R T ');

    // función que hace petición a la API Giphy para traernos gifs
    const getArts = () => {
        // setCargando(true);

        // console.log('soy la función getArts');
        const URL = 'https://megastore-bb279-default-rtdb.firebaseio.com/carro.json';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {

                setArts(respuesta);
                // console.log('cart-art', respuesta);
            });
    }

    // FUNCION ELIMINAR de carrito

    const removeFromCart = (idArt) => {
        // console.log('borrando', idArt);
        const URL = `https://megastore-bb279-default-rtdb.firebaseio.com/carro/${idArt}.json`;


        fetch(URL, { method: 'DELETE', })
            .then(body => body.json())
            .then(respuesta => {
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
       arts !== null ?
            Object.keys(arts).map(id => total = total + arts[id].precio * arts[id].cant) :
            total = 0,
        <div className="container" style={{marginTop:"90px"}}>

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
                                cantidad={arts[id].cant}
                                removeFromCart={removeFromCart}
                                idArt={id}
                            />) :

                        <div className="alert alert-danger" role="alert">
                            <h4 className="text-center">Carrito Vacío. Agrega uno o más artículos y regresa aquí. No tardes!! Vuelve pronto!!</h4>
                        </div>
                }
            </div>
            <div className="alert alert-warning" role="alert">
                <h3 className="text-center"> Total: {total} </h3>
            </div>
            {total > 0 ? (
                <div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="button"
                     style={{display:esconder}} 
                    >Proceder al pago</button>
                </div>
                <span className="badge bg-warning text-dark fs-3"
                        style={{display:esconder1}}
                >Favor de autenticarse para proceder al pago</span> 
                                                        
                </div>)
                 :
                (<div>

                </div>)}

            </div>
         
                        )
}

                        export default Cart