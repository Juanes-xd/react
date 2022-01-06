import React from "react"
import ListadoNames from "./components/ListadoNames";
import Bienvenida from "./components/Bienvenida"

function App(){
  return (
    <div className="container">
       {/* <ListadoNames/> */}
       <h1>Propiedades de componentes</h1>
       <Bienvenida nombre="Willy"/>
       <Bienvenida nombre="Camilo"/>
       <Bienvenida nombre="Juanes"/>
       <Bienvenida nombre="Caro"/>
    </div>
  );
}

export default App