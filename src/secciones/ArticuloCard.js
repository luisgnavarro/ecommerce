import React, {useState} from 'react'
// import Modal from 'react-modal';
// import { useModal } from "react-modal-hook";



const ArticuloCard = (props) => {
  const { titulo, descripcion, precio, imagen, categoria, marca, iden,  addToCart, abrirModal } = props;
  // console.log(props);
  const [cant,setCant] = useState('');
  


  return (
    
    <div className="card" style={{ width: "12rem" }} >
      {imagen ?
        <img src={imagen} className="card-img-top" alt="{titulo}" height="200px" onClick={() => { abrirModal(titulo, descripcion, precio, imagen, categoria, marca, iden,cant)}} ></img> :
        <img src="https://assets.disney.crucemar.com/galery/camarotes/sin-imagen.gif" className="card-img-top" alt="No disponible" onClick={() => { abrirModal(titulo, descripcion, precio, imagen, categoria, marca, iden,cant)}}></img>
      }
      {/* onClick={() => { Demo() }} */}
      <div className="card-body">
        <h5 className="card-title">{titulo} ({marca})</h5>
        {/* <p className="card-text">{descripcion}. <b>${precio}</b></p> */}
      {/* <p className="card-text">{descripcion}</p> */}
        <p className="card-text"><b>${precio}</b></p>
        <p className="card-text">{categoria}</p>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Cantidad</label>
          <select onChange={(evento)=>{console.log(evento.target.value); setCant(evento.target.value);} } className="form-select" id="inputGroupSelect01">
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
          <button onClick={() => { addToCart('Luis',titulo, descripcion, precio, imagen, categoria, marca, iden,imagen,cant) }} className="btn btn-success">Agregar al carrito</button>
        </div>
     
      </div>
    </div>
  )
}

export default ArticuloCard
