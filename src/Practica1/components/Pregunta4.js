import React from "react";
const arrays = [1 ,'hola', 2];
export function Pregunta4(array){
  var num = [];
  var strig = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
       num.push(array[i]);
    }
    ; 
  }
 return num + " numeros";
}  

alert("Pregunta 4 :  "+ Pregunta4(arrays));