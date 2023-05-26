function Detalle({tarjetaSeleccionada}){

    if (!tarjetaSeleccionada){
        return null
    }

    const { nombre, tipo, notas, fecha_cultivo, altura, imagen } = tarjetaSeleccionada;
    
    return(
        <div className="container-coffee">
            <h3>{tarjetaSeleccionada.nombre}</h3>
            <p>{tarjetaSeleccionada.fecha_cultivo}</p>
            <img className='imagen-cafe' src={tarjetaSeleccionada.imagen} alt='cafe'></img>
            <p>Notas</p>
            <p>{tarjetaSeleccionada.notas}</p>
            <h3>Cultivado a una altura de {tarjetaSeleccionada.altura}msnm</h3>
        </div>
    )
}

export default Detalle;