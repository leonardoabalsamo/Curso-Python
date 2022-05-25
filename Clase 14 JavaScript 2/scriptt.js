

// switch (operacion){
//     case 1 :     resultado = numero1+numero2
//     alert("La suma es " + resultado)
//     break

//     case 2 :
//         resultado = numero1-numero2
//         alert("La resta es " + resultado)    
//         break
        
//     case 3: 
//     resultado = numero1*numero2
//     alert("La multi es " + resultado)    
//     break

//     case 4:
//     resultado = numero1/numero2
//     alert("La division es " + resultado) 
//     break

//     default:
//     alert("Combinación errónea")
    
// }


// console.log("1")

// // Escribir 5 veces el numero 1.
// let cont = 1;

// while ( cont <=5 )
// {
//     console.log("1")
//     cont ++
// }

// function multiplicar ( num1,  num2){
//     let resultado = num1 + num2
//     console.log(resultado)
// }


// multiplicar(2,3)



function conversionDolar(pesos){
    let dolares = pesos / 200
    return dolares
}


let pesos = parseFloat(prompt("Che, cuantos pesos tenes?"))
let ahorro = conversionDolar(pesos)