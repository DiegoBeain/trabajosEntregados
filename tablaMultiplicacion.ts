import  *  as rls from "readline-sync";
let numero= rls.questionInt ("ingrese numero: "); 
let maximo= rls.questionInt ("ingrese numero final: ");
let variableDeControl: number = 1
let result= 0;
  while   (variableDeControl <= maximo ){
       result= numero * variableDeControl
       variableDeControl++
       console.log (numero, "multiplicado por ",variableDeControl-1, "= " ,result);
    }