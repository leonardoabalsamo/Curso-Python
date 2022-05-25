// function mensaje(n){
//     for (let i=0; i<n;i++){
//         console.log("Bienvenidos al curso de Full Stack")
//     }
// }


// let cantidad = parseInt(prompt("cuantas veces queres repetir?"))

// mensaje (cantidad)



// let numero1 = parseInt(prompt("valor 1:"))
// let numero2 = parseInt(prompt("valor 2:"))

// mayor (numero1,numero2)
// function mayor (a,b){

//     if (a>b) { console.log("el primero es mayor")}
//     if (a<b) { console.log("el segundo es mayor")}
//     else { console.log("Son iguales") }
// }

// notas()

// function comprobarNota(num){
//     if (num != null)
//     {
//         while(isNaN(num)){
//             alert("Debe ser un numero")
//             num = prompt("nota:")
//         }
//         return num
//     }else{ return ()}
// }

// function notas (  ){
//     let i =0
//     let valor =0
//     let numero = parseInt(prompt("nota:"))
//     numero = comprobarNota(numero)

//     while ( numero != (-1)){
//         i++
//         valor +=numero
//         numero = parseInt(prompt("nota:"))
//     }
//     let promedio = valor / i
    
//     console.log("El promedio de la cantidad de notas " + i + " es : " + promedio)
// }



// let texto = "Vamos a cortar este texto"

// let cortado = texto.substring(0,5)
// console.log(texto.slice(-5))

// console.log(cortado)

// let texto = "Juan carlos batman"
// texto.trim() // saca los espacios de adelante y atras
// console.log( texto.split(" ") ) // toArray -> en función de lo que indiquemos.





// //arrow functions -> Funciones Flecha
// suma(1,3)

// //Declarativa
// function suma(a,b){  // funcion declarativa hoysting queda almacenada podes usarla en cualquier lugar
//     return a+b
// }


// //Expresiva, se puede llamar abajo..
// let sumaExpresiva = function (a,b){
//     return a+b
// }


// //Flecha
// let sumaFlecha = (a,b) => { return a+b }
// // Se usa para funciones de orden superior



let elementos = [1,3,5,7,9,11,13,200]

// elementos.forEach( e => console.log(e) ) // recorre el array


// elementos .forEach( function(elemento, indice, array){
//     console.log(elemento)
//     console.log(indice)
//     console.log(array)
// } )

// every verifica TODOS los elementos que cumplen con la condicion

console.log(elementos.every(e => e<=100))


// Si ALGUNO cumple la condicion.. -> some

console.log(elementos.some(e => e>150))


//MAP

//ejecuta cada elemento y crea un nuevo array
// salir de un array de pares y transformar en impares

let pares = [ 2,4,6,8,10,12]

let impares = pares.map(num => num+1)
console.log(impares)


// find busca y trae el primer elemento 

console.log(pares.find(p => p>8))


pares.filter