import React from 'react'



const CarritoCard = (props) => {
  const { titulo, precio, imagen, marca, cantidad, removeFromCart, idArt } = props;
  console.log('carritocard', props);

  // const [cant,setCant] = useState('');
  return (

    //     <div className="input-group mb-3">
    //       <label className="input-group-text" for="inputGroupSelect01">Cantidad</label>
    //       <select  className="form-select" id="inputGroupSelect01">
    //         <option selected>{cantidad}</option>
    //         {/* <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //         <option value="5">5</option>             */}
    //       </select>
    //     </div>


    <div className="container card" style={{ maxWidth: "100%" }} >
      <div className="row">
        <div className="col-3">
          {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
          {imagen ?
            <img src={imagen} className="img-fluid rounded-start" alt="{titulo}" width="50px"></img> :
            <img src="https://assets.disney.crucemar.com/galery/camarotes/sin-imagen.gif" className="img-fluid rounded-start" alt="No disponible"></img>
          }
          <p className="card-text"><small className="text-muted">{marca}</small></p>
        </div>
        <div className="col-6">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">Precio: ${precio} * Cantidad: {cantidad}</p>
            {/* <p className="card-text">Cantidad: {cantidad}</p> */}
            <p className="card-text"><b>Subtotal: {precio * cantidad}</b></p>
          </div>
        </div>
        <div className="col-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <button onClick={() => { removeFromCart(idArt) }} className="btn btn-danger">Eliminar de carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CarritoCard
