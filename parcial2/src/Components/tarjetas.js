import { useState, useEffect } from "react";
import Detalle from "./detalle";

function Tarjetas() {

    const [tarjetas, setTarjetas] = useState([]);
    const [tarjetaDetalle, setTarjetaDetalle] = useState([]);

    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    const [id, setId] = useState(0);

    const handleRowClick = (tarjeta) => {
        setTarjetaSeleccionada(tarjeta);
        setId(tarjeta.id);
    };

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(res => res.json())
            .then(data => {
                setTarjetas(data);
            });
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3001/cafes/${id}`) 
            .then(res => res.json())
            .then(data => {
                setTarjetaDetalle(data);
            });
    }, [])


    return (
        <div>
            <header className='hola'>
                <h3>El aroma mágico</h3>
                <hr></hr>
                <img src='https://cdn.discordapp.com/attachments/1023419960363581492/1111644735304638556/image.png' alt='libro'></img>
            </header>
            <div className="body-container">
                <div className="tarjeta-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarjetas.map((tarj) => (
                                <tr key={tarj.id} onClick={() => handleRowClick(tarj)}>
                                    <td>{tarj.id}</td>
                                    <td>{tarj.nombre}</td>
                                    <td>{tarj.tipo}</td>
                                    <td>{tarj.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="descripcion-seccion">
                    {tarjetaSeleccionada ? (
                        <Detalle tarjetaSeleccionada={tarjetaDetalle} />
                        ) : (
                        <p></p>)}
                </div>
            </div>
        </div>
      );
}

export default Tarjetas;