import * as rls from "readline-sync"
let num1: number = rls.questionInt("ingrese primer numero: ",)
let num2: number = rls.questionInt("ingrese segundo numero: ",)


function areMultiples(num1, num2): boolean {
    return num1 % num2 === 0 || num2 % num1 === 0 
  }

 console.log ("los numeros son multiplos? :" ,areMultiples(num1,num2))





