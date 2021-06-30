import React, {  useEffect, useState } from 'react'
import ArticuloCard from './ArticuloCard';



const Main = () => {
    // traer tareas de firebase
    //1- fincion que haga peticion a firebase
    //2 Mandar llamar funcion cuando el componente MAin se monte
    //3 crear variable de estado para guadra nuestras tareas
    //4 crear una car por cada tarea pendiente

    //variable de estados
    const [articulo, setArticulo] = useState([]);

    const getArticulos = () => {
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {

                setArticulo(respuesta);
                // console.log(respuesta);
            });
    }

    
    //el callback del useEffect antes que el componente se monte
    useEffect(() => {
        getArticulos();
    }, []);

    const addToCart = (user,titulo, descripcion, precio, imagen, categoria, marca, iden,image,cant) => {
        const URL = 'https://megastore-bb279-default-rtdb.firebaseio.com/carro.json';
        let objectTask = {
            user,
            titulo, 
            descripcion, 
            precio, 
            imagen, 
            categoria, 
            marca,
            iden,
            image,
            cant
        }

        fetch(URL,{method: 'POST', body: JSON.stringify(objectTask)})
            .then(body => body.json())
            .then(respuesta=>{
                // console.log(respuesta);
                alert('articulo agregado correctamente');
            }
                )  

    }
    
        

   


    return (
        <div className="container">
            {/* <h3>Selecciona los articulos de tu preferencia</h3> */}
           
            
            <div className="d-flex flex-wrap">
                {
                    Object.keys(articulo).map(id =>
                        <ArticuloCard 
                            titulo={articulo[id].product_name}
                            descripcion={articulo[id].description}
                            precio={articulo[id].price}
                            imagen={articulo[id].image}
                            categoria={articulo[id].category}
                            marca={articulo[id].brand}
                            iden ={articulo[id]._id}
                            key={id}
                            addToCart = {addToCart}  
                            cantidad = '1'                          
                        />)
                }
            </div>
           
        </div>
    )
}


export default Main
