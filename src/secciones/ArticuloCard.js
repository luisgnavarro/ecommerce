import React, {useState} from 'react'



const ArticuloCard = (props) => {
  const { titulo, descripcion, precio, imagen, categoria, marca, iden, key, addToCart } = props;
  // console.log(props);
  const [cant,setCant] = useState('');
  return (
    <div className="card" style={{ width: "20rem" }} >
      {imagen ?
        <img src={imagen} className="card-img-top" alt="{titulo}"></img> :
        <img src="https://assets.disney.crucemar.com/galery/camarotes/sin-imagen.gif" className="card-img-top" alt="No disponible"></img>
      }
      <div className="card-body">
        <h5 className="card-title">{titulo} ({marca})</h5>
        {/* <p className="card-text">{descripcion}. <b>${precio}</b></p> */}
        <p className="card-text">{descripcion}</p>
        <p className="card-text"><b>${precio}</b></p>
        <p className="card-text">{categoria}</p>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">Cantidad</label>
          <select onChange={(evento)=>{console.log(evento.target.value); setCant(evento.target.value);} } className="form-select" id="inputGroupSelect01">
            <option selected>Elegir cantidad...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>            
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={() => { addToCart('Luis',titulo, descripcion, precio, imagen, categoria, marca, iden,imagen,cant) }} className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ArticuloCard
