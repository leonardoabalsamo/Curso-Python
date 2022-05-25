function tablaMultiplicar(numero) {

    for (let i=0; i<=10; i++){
        console.log(numero, 'x' , i , '=' , numero*i)
    }
}


function tablaMultiplicarHasta(numero, hasta){
    for (let i=0; i<=hasta; i++){
        console.log(numero, 'x' , i , '=' , numero*i)
    }
}


function tablaMultiplicarHasta(numero, hasta=10){
    for (let i=0; i<=hasta; i++){
        console.log(numero, 'x' , i , '=' , numero*i)
    }
}
// se define por si pasan un solo parametro


//Arrays

// let num = [2,8,7,6,0]

// console.log(num)

// let arrayAlumnos = new Array()
// arrayAlumnos[0] = 'Leonardo'
// arrayAlumnos[1] = 'Laura'
// arrayAlumnos[2] = 'Lorena'
// arrayAlumnos[3] = 'Noelia'


// console.log(arrayAlumnos)
// console.log(arrayAlumnos.length)
// console.log(arrayAlumnos[9]) // undefined
// console.log(arrayAlumnos[arrayAlumnos.length-1]) // Ultimo elemento del array


let compras = new Array()
compras [0] = 'chino'
compras [1] = 'casa'
compras [2] = 'musica'
compras [3] = 'nafta'
compras [4] = 'verduleria'
compras [5] = 'electrodomestico'
compras[compras.length] = 'farmacity' // es un push, no se usa mas
compras.push('garbarino') // agregar al final
compras.unshift('agregado al principio') // agregar al final
compras.shift() // Elimina el primer elemento y lo retorna si lo asignamos.
compras.pop() // Elimina el ultimo elemento  y lo retorna si lo asignamos.
compras.splice(1,2) //Arranca en posición 1 y borra cantidad de elementos 2.
compras.splice(1,1,'platos' , 'vasos') //Borra y agrega elementos.
compras.splice(1,0,'agrega plato' , 'agrega vasos') //Borra y agrega elementos.
console.log(compras)


//transformar un array a un String -> se usa para json, api

console.log(compras.join("-")) //  concatena con el operador q pongas..
console.log(compras.join('\n')) // uno abajo del otro
console.log(compras.toString()) // lo devuelve con comas,,,,,


let unArrayDinamico = [ "chino" , true , [50,'treinta' , 'tranqui'] , 2 , 'soybiker' , 2.222222]

console.log(unArrayDinamico)
console.log(unArrayDinamico[2][1]) //  posición 2 posición 1 del array interno.


let unArray = [50,40,30,01,02,5,19,99,29929]
let otroArray = [4,5,6]

//pushear un array dentro de otro..

unArray.push(otroArray)
console.log(unArray)

//concatenar arrays

let arrayConcat = unArray.concat(otroArray)
let concatenaVacio = [].concat(unArray,arrayConcat)
console.log(arrayConcat)
console.log(concatenaVacio)



// Ordenamiento.
//sort() ordena alfabeticamente

compras.sort()
console.log(compras)

//sort con numeros ordena por el primer digito.. no sirve.
// para ordenar numeros 

unArray.sort( function (a,b){ return a-b } ) // toma dos posiciones y compara..
unArray.sort((a,b) => a-b) // es lo mismo


// validación

let email = 'leonardoabalsamohotmail.com'

for (let i=0; i<email.length ; i++){
    if (email[i] == '@'){
        break
    }
}


if (email.includes('@')) console.log('mail validado')
else console.log('mail invalido')

// Dado un texto contar la cantidad de vocales.

let texto = ' Este es un texto cualquiera de muchos caracteres y necesito contar las vocales '
let contadorVocales = 0
let vocales = 'aeiou'

// for (let i = 0; i<texto.length; i++){
//     //if (texto[i] == 'a'|| texto[i] == 'e'|| texto[i] == 'o'||texto[i] == 'u'|| texto[i] == 'i'|| ) contadorVocales ++;
//     if (vocales.includes(texto[i])) contadorVocales++
// }

if (texto.includes(vocales)) return  console.log('Si tiene vocales') 


// en vez de recorrer el texto se puede recorrer las vocales, hay q buscarle la vuelta

// for (let i=0; i<vocales.length; i++){
//     if (texto.includes(vocales[i])) contadorVocales++
// }
// console.log('El texto tiene ' + contadorVocales)


