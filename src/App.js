import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png'
import Boton from './componentes/Boton';
import { useState } from 'react';
import Contador from './componentes/Contador';

function App() {
  const [clicks, setClicks] = useState(0);

  const manejarClic = () => {
    setClicks(clicks + 1);
  }

  const reiniciarContador = () => {
    setClicks(0);
  }
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={clicks} />
        <Boton
          texto="Clic"
          tipoBoton="boton-clic"
          onClick={manejarClic} />
        <Boton
          texto="Reiniciar"
          tipoBoton="boton-reiniciar"
          onClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
