import React from 'react'

const ArticuloCard = (props) => {
    const {titulo,descripcion,precio,imagen} = props;
    
    return (
        <div className="card" style={{width: "18rem"}} >
       <img src={imagen} class="card-img-top" alt="{titulo}"></img>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}<b>${precio}</b></p>
          <div className="d-flex justify-content-between">
            
          </div>
        </div>
      </div>
    )
}

export default ArticuloCard
