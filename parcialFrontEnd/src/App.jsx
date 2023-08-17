import { useState } from 'react';
import './App.css'
import Card from './Components/Card';

function App() {

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");

  const onChangeMarca = (e) => setMarca(e.target.value);
  const onChangeModelo = (e) => setModelo(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDeFault();
    alert('Tu auto es marca: ${marca}');
  };
  const validarMarca = (marca) => {
    const sinEspacios = marca.trim();
    if (sinEspacios.length ≥ 3) {
        return true;
        } else {
            return false;
    }
};
const validarModelo = (modelo) => {
    const cantidadDeCaracteres = modelo.lengt();
    if (cantidadDeCaracteres ≥ 6) {
        return true;
        } else {
            return false;
    }
};
const envioDeFormulario = (e) => {
    e.preventDefault();
    const marcaEsValido = validarMarca(marca);
    const modeloEsValido = validarModelo(modelo);
    if (!marcaEsValido || !modeloEsValido) {
        alert( “Por favor chequea que la información sea correcta”);
        }
};



  return (
    <div className='App'>
      <h1>Turno para el mecanico.</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder='Marca del vehiculo'
          value={marca}
          onChange={onChangeMarca}
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={onChangeModelo}
        />
        <button type="submit">Enviar</button>

      </form>
      <Card marca={marca} modelo={modelo}/>
    </div>
  );
}

export default App;