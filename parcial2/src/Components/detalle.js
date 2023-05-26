import { FormattedDate, FormattedMessage } from "react-intl";

function Detalle({tarjetaSeleccionada}){

    if (!tarjetaSeleccionada){
        return null
    }

    const { nombre, tipo, notas, fecha_cultivo, altura, imagen } = tarjetaSeleccionada;
    
    return(
        <div className="container-coffee">
            <h3>{tarjetaSeleccionada.nombre}</h3>
            <p><FormattedDate value={tarjetaSeleccionada.fecha_cultivo}
                    year="numeric"
                    month="long"
                    day="numeric"/></p>
            <img className='imagen-cafe' src={tarjetaSeleccionada.imagen} alt='coffee'></img>
            <p><FormattedMessage id="notes"/></p>
            <p>{tarjetaSeleccionada.notas}</p>
            <h3><FormattedMessage id="height_text"/> {tarjetaSeleccionada.altura}<FormattedMessage id="level"/></h3>
        </div>
    )
}

export default Detalle;