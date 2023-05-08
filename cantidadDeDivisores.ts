function contarDivisores(numero: number): void{
    let cantidadDeDivisores = 0
    for (let i=1; i<=numero; i++){
        if(numero%i === 0){
            cantidadDeDivisores++
        }
    }
    console.log ("el numero", numero,"tiene", cantidadDeDivisores, "divisores" )
}

contarDivisores(10)
contarDivisores(5)
contarDivisores(15)