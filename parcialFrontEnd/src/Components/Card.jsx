//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({marca, modelo}) {

    return (
        <div className="Card" >
            <h2>Datos del Vehiculo.</h2>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
        </div>
    );
}

export default Card;