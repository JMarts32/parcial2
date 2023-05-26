function Detalle({tarjetaSeleccionada}){

    if (!tarjetaSeleccionada){
        return null
    }

    const { nombre, tipo, notas, fecha_cultivo, altura, imagen } = tarjetaSeleccionada;
    
    return(
        <div>
            <h3>{tarjetaSeleccionada.nombre}</h3>
            <p>{tarjetaSeleccionada.fecha_cultivo}</p>
            <img className='imagen-cafe' src={tarjetaSeleccionada.imagen} alt='cafe'></img>
            <p>{tarjetaSeleccionada.notas}</p>
            <p>{tarjetaSeleccionada.tipo}</p>
            <p>{tarjetaSeleccionada.altura}</p>
        </div>
    )
}

export default Detalle;