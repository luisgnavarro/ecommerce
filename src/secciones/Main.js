import React, { useEffect, useState } from 'react';
import ArticuloCard from './ArticuloCard';
import Modal from 'react-modal';

let mTitulo = '';
let mDescripcion = '';
let mPrecio = '';
let mImagen = '';
let mCategoria = '';
let mMarca = '';
let mIden = '';
let contador = 0;

const Main = (props) => {


    const { searchValue } = props;



    //variable de estados
    const [articulo, setArticulo] = useState([]);
    const [mostrar, setMostrar] = useState("block");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cant, setCant] = useState('');

    // busqueda = searchValue;
    contador = 0;
    articulo.filter(arti => arti.product_name.toLowerCase().includes(searchValue.toLowerCase())).map(flt => (
        contador++

    ))
    // console.log("contador", contador);
    // console.log("MainBusq", searchValue, "Long", searchValue.length);



    const abrirModal = (titulo, descripcion, precio, imagen, categoria, marca, iden, cant) => {

        mTitulo = titulo;
        mDescripcion = descripcion;
        mPrecio = precio;
        mImagen = imagen;
        mCategoria = categoria;
        mMarca = marca;
        mIden = iden;
        setModalIsOpen(true)
    }

    const getArticulos = () => {
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';

        fetch(URL)  // sin metodo el default es GET
            .then(body => body.json())
            // .then(respuesta => console.log(respuesta));
            .then(respuesta => {
                let productosCompletos = respuesta.map(prod => {
                    let objProducto = {};

                    objProducto = prod.image && prod.image.slice(0, 4) === 'http' ? prod :
                        prod.images && prod.images.slice(0, 4) === 'http' ? { ...prod, image: prod.images } :
                            { ...prod, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1uZT7WyViB1GdvozvJrlRdGMvRU-0Xm2NQ&usqp=CAU' }

                    return objProducto;
                })
                setArticulo(productosCompletos);
                setMostrar("none");

                // console.log(respuesta);
            });
    }


    //el callback del useEffect antes que el componente se monte
    useEffect(() => {
        getArticulos();

    }, []);

    const addToCart = (user, titulo, descripcion, precio, imagen, categoria, marca, iden, image, cant) => {
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
        if (cant > 0) {
            fetch(URL, { method: 'POST', body: JSON.stringify(objectTask) })
                .then(body => body.json())
                .then(respuesta => {
                    alert('articulo agregado correctamente');
                    setModalIsOpen(false);

                }
                )
        } else {
            alert('ERROR: CANTIDAD NO VALIDA');
            // console.log('cant', cant, 'mCant',mCant);
            getArticulos();
        }

    }




    return (


        <div className="container" style={{ marginTop: "90px" }} >

            {<Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            // backgroundColor: 'white'
                            position: 'fixed',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: '#acacac',
                            zindex: 999
                        },
                        content: {
                            position: 'absolute',
                            width: '80%',
                            height: '70%',
                            left: '10%',
                            top: '15%',
                            overflow: 'auto',
                            backgroundcolor: '#fff',
                            WebkitTransform: 'translate(-30,-30%)',
                            transform: 'translate(-30,-30%)'

                        }

                    }
                }
            >
                <img onClick={() => setModalIsOpen(false)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Back-small.svg/1024px-Back-small.svg.png" alt="back" height="50px" ></img>

                <div className="container card " style={{ maxWidth: "100%" }} >
                    <div className="row">
                        <div className="col-6">
                            {mImagen ?
                                <img src={mImagen} className="card-img-top" alt="{titulo}" height="300px" ></img> :
                                <img src="https://assets.disney.crucemar.com/galery/camarotes/sin-imagen.gif" className="card-img-top" alt="No disponible" ></img>
                            }
                        </div>
                        <div className="col-6">
                            <div className="card-body"></div>
                            <h5 className="card-title">{mTitulo} ({mMarca})</h5>
                            <p className="card-text">{mDescripcion}</p>
                            <p className="card-text"><b>${mPrecio}</b></p>
                            <p className="card-text">{mCategoria}</p>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Cantidad</label>
                                <select onChange={(evento) => { setCant(evento.target.value); }} className="form-select" id="inputGroupSelect01">
                                    <option value>Elegir cantidad...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button onClick={() => { addToCart('Luis', mTitulo, mDescripcion, mPrecio, mImagen, mCategoria, mMarca, mIden, mImagen, cant) }} className="btn btn-success">Agregar al carrito</button>
                            </div>

                        </div>
                    </div>

                </div>
            </Modal>}

            <div className="d-flex flex-wrap">

                {searchValue.length > 0 ?
                    articulo.filter(arti => arti.product_name.toLowerCase().includes(searchValue.toLowerCase())).map(flt => (
                        <ArticuloCard
                            titulo={flt.product_name}
                            descripcion={flt.description}
                            precio={flt.price}
                            imagen={flt.image}
                            categoria={flt.category}
                            marca={flt.brand}
                            iden={flt._id}
                            key={flt._id}
                            addToCart={addToCart}
                            cantidad='1'
                            abrirModal={abrirModal}
                        // buscar = {buscar}
                        />)
                    ) :
                    articulo.map(flt => (
                        <ArticuloCard
                            titulo={flt.product_name}
                            descripcion={flt.description}
                            precio={flt.price}
                            imagen={flt.image}
                            categoria={flt.category}
                            marca={flt.brand}
                            iden={flt._id}
                            key={flt._id}
                            addToCart={addToCart}
                            cantidad='1'
                            abrirModal={abrirModal}
                        // buscar = {buscar}
                        />)
                    )
                }
                {contador === 0 && searchValue.length > 0 ? <span className="badge bg-warning text-dark fs-3">No existen resultados...intenta otra vez</span>
                    : (<div className="spinner-grow text-success" role="status" style={{ display: mostrar }}>
                        <p style={{ display: mostrar }}>  ??</p>
                        <span style={{ display: mostrar }}>cargando articulos</span></div>)}
            </div>

        </div >

    )
}


export default Main
