import React from 'react';
import { Pregunta1 } from "./components/Pregunta1";
import { Pregunta2 } from "./components/Pregunta2";
import { Student } from "./components/Pregunta3";
import { Pregunta4 } from "./components/Pregunta4";
export const PracticaComponent = () => {
  return (
    <div>
      <center><h1 >Practica # 1 ayudantia</h1></center>
      <Pregunta1/>
      <hr/>
      <Pregunta2/>
      <hr />
      <Student/>
      <hr/>
      <Pregunta4/>
    </div>
  );
}
