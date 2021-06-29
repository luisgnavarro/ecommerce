import React, {  useEffect, useState } from 'react'
// import Crear from './Crear';
// import TareaCard from './TareaCard'

const Main = () => {
    // traer tareas de firebase
    //1- fincion que haga peticion a firebase
    //2 Mandar llamar funcion cuando el componente MAin se monte
    //3 crear variable de estado para guadra nuestras tareas
    //4 crear una car por cada tarea pendiente

    //variable de estados
    const [articulo, setArticulo] = useState([]);

    const getArticulos = () => {
        const URL = 'https://proyecto3db-default-rtdb.firebaseio.com/tareas.json';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {

                setTareas(respuesta);
                console.log(respuesta);
            });
    }

    // FUNCION ELIMINAR TAREA
    const borrarTarea = (id) => {
        console.log('borrando tarea', id)
        const URL = `https://proyecto3db-default-rtdb.firebaseio.com/tareas/${id}.json`;
        console.log(URL);
        fetch(URL, {method: 'DELETE',})
            .then(body => body.json()) // or res.json()
            .then(respuesta =>{
                getTareas() ;
                console.log(respuesta)});
    }

    //funcion que actualiza la tarea, cambia status o completada a TRUE
    const actualizarTarea = (id,titulo,descripcion,completada) => {
        const URL = `https://proyecto3db-default-rtdb.firebaseio.com/tareas/${id}.json`;
        let objetoBody = {
            titulo,
            descripcion,
            completada
        }
        fetch(URL,{method: 'PATCH', body: JSON.stringify(objetoBody)})
            .then(body => body.json())
            .then(respuesta => {
                console.log(respuesta);
                // document.getElementById(id).style.display = 'none';
                getTareas() ;
            })
        }

         //funcion que actualiza la tarea, cambia status o completada a TRUE
    // const completarTarea = (id,titulo,descripcion,completada) => {
    //     const URL = `https://proyecto3db-default-rtdb.firebaseio.com/tareas/${id}.json`;
    //     let objetoBody = {
    //         titulo,
    //         descripcion,
    //         completada
    //     }
    //     fetch(URL,{method: 'PATCH', body: JSON.stringify(objetoBody)})
    //         .then(body => body.json())
    //         .then(respuesta => {
    //             console.log(respuesta);
    //             // document.getElementById(id).style.display = 'none';
    //             getTareas() ;
    //         })
    //     }

        
    // //funcion que actualiza la tarea, cambia status o completada a TRUE
    // const anularTarea = (id,titulo,descripcion,completada) => {
    //     const URL = `https://proyecto3db-default-rtdb.firebaseio.com/tareas/${id}.json`;
    //     let objetoBody = {
    //         titulo,
    //         descripcion,
    //         completada
    //     }
    //     fetch(URL,{method: 'PATCH', body: JSON.stringify(objetoBody)})
    //         .then(body => body.json())
    //         .then(respuesta => {
    //             console.log(respuesta);
    //             // document.getElementById(id).style.display = 'none';
    //             getTareas() ;
    //         })
    //     }


    //1.enviar como prop la funcion borrarTarea al componente TareaCard
    //2 en TareaCard necesitamos recibir como prop la funcion deleteTarea
    //3. Mandar llamar la funcion de borrado en tareaCard cuando se haga clic en boton eliminar
    //4 Pasar identificador como prop

    const crearTarea = (titulo,descripcion) => {
        const URL = 'https://proyecto3db-default-rtdb.firebaseio.com/tareas.json';
        if (titulo && descripcion){
        let objectTask = {
            titulo,     // no se requiere valor pq viene en props
            descripcion,
            completada: false
        }

        fetch(URL,{method: 'POST', body: JSON.stringify(objectTask)})
            .then(body => body.json())
            .then(respuesta=>{
                console.log(respuesta);
                getTareas();
            }
                )  

    }
    }
    //el callback del useEffect antes que el componente se monte
    useEffect(() => {
        getTareas();
    }, []);


    return (
        <div className="container">
            <h1>Mis Tareas</h1>
           
            
            <div className="d-flex flex-wrap">
                {
                    Object.keys(tareas).map(id =>
                        <TareaCard 
                            titulo={tareas[id].titulo}
                            descripcion={tareas[id].descripcion}
                            completada={tareas[id].completada}
                            borrarTarea = {borrarTarea}
                            identificador = {id}
                            actualizarTarea = {actualizarTarea}
                            // anularTarea = {anularTarea}
                            key={id}
                        />)
                }
            </div>
            <section className="my-5">
                <h2>Nueva Tarea:</h2>
                <Crear crearTarea={crearTarea}/>
            </section>
        </div>
    )
}


export default Main
