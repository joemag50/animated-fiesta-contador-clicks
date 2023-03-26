import React from "react";
import '../estilos/Boton.css'

function Boton({ texto, tipoBoton, onClick }) {
  return (
    <button
      className={tipoBoton}
      onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;