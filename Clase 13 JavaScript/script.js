// let edad = 18.1
// let pago = false

// if (edad > 18 && pago == true){
//     console.log("Puede ver la pelicula")
//     console.log("PElicula violenta")
// }

// console.log("Sigue funcionando..")


// let numero = parseInt(prompt("Dame un numero"))


// let modulo = numero %2

// if (modulo == 0){
//     alert ("es par")
// } else {
//     alert ("es impar")
// }


// let edad1; let edad2;

// edad = parseInt(prompt("deme la edad 1"))


/*CALCULADORA*/


// let numero1 = parseFloat(prompt("Dame un numero"))
// let numero2 = parseFloat(prompt("Dame otro numero"))
// let operacion = parseInt(prompt("Ingrese: 1:sumar 2:restar 3:multiplicar 4:dividir"))

// if (operacion == 1 ){
//     resultado = numero1+numero2
//     alert("La suma es " + resultado)
// }else if (operacion == 2 ){
//         resultado = numero1-numero2
//         alert("La resta es " + resultado)    
// }else if (operacion == 3 ){
//     resultado = numero1*numero2
//     alert("La multi es " + resultado)    
// }else if (operacion == 4 ){
//     resultado = numero1/numero2
//     alert("La division es " + resultado)    
// }else{
//     alert("Combinación errónea")
// }

let numero1 = parseFloat(prompt("Dame un numero"))
let numero2 = parseFloat(prompt("Dame otro numero"))
let operacion = parseInt(prompt("Ingrese: 1:sumar 2:restar 3:multiplicar 4:dividir"))

switch (operacion){
    case 1 :     resultado = numero1+numero2
    alert("La suma es " + resultado)
    break

    case 2 :
        resultado = numero1-numero2
        alert("La resta es " + resultado)    
        break
        
    case 3: 
    resultado = numero1*numero2
    alert("La multi es " + resultado)    
    break

    case 4:
    resultado = numero1/numero2
    alert("La division es " + resultado) 
    break

    default:
    alert("Combinación errónea")
    
}

