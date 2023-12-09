import React from 'react';
import { Pregunta1 } from "./components/Pregunta1";
import { Pregunta2 } from "./components/Pregunta2";
export const PracticaComponent = () => {
  return (
    <div>
      <center><h1 >Practica # 1 ayudantia</h1></center>
      <Pregunta1/>
      <hr/>
      <Pregunta2/>
    </div>
  );
}
