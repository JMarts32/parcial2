import { useState, useEffect } from "react";
import Detalle from "./detalle";
import { FormattedMessage } from "react-intl";

function Tarjetas() {

    const [tarjetas, setTarjetas] = useState([]);
    const [tarjetaDetalle, setTarjetaDetalle] = useState([]);

    const handleRowClick = async (id) => {
        try{
            const response = await fetch(`http://localhost:3001/cafes/${id}`, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                setTarjetaDetalle(data);
            }

        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(res => res.json())
            .then(data => {
                setTarjetas(data);
            });
    }, [])

    return (
        <div>
            <header>
                <h3><FormattedMessage id="title"/></h3>
                <hr></hr>
                <img src='https://cdn.discordapp.com/attachments/1023419960363581492/1111644735304638556/image.png' alt='libro'></img>
            </header>
            <div className="body-container">
                <div className="tarjeta-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><FormattedMessage id="name"/></th>
                                <th><FormattedMessage id="type"/></th>
                                <th><FormattedMessage id="region"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarjetas.map((tarj) => (
                                <tr key={tarj.id} onClick={() => handleRowClick(tarj.id)}>
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
                    {tarjetaDetalle && <Detalle tarjetaSeleccionada={tarjetaDetalle} />}
                </div>
            </div>
        </div>
      );
}

export default Tarjetas;