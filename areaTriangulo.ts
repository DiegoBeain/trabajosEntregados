let base = 0
let altura = 0
let area = 0

function calcularAreaTriagulo(base,altura){
    return base*altura/2
}
    for (let i=1;i<=7;i++){
        base=i
        altura=i*2
        area=calcularAreaTriagulo(base,altura)
        console.log("el area del triangulo es: ",area)
    }