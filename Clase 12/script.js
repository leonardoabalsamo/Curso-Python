//alert('HOLA MUNDO')

//let se usa para crear la variable y supuestamente te avisa si se vuelve a declarar (subrayado)
let alumno = 'Fede'
// cambio el valor
alumno = 'Leonardo'
//imprimo en la pantalla
console.log('El nombre del alumno es ' + alumno)

//var no te avisa

//let alumno = 'Fedde' no te deja declarar 2 veces

const entidad = 'Gobierno Ciudad'

//entidad = 'Nacion'


let nota = 9 // tipado dinámico

console.log('La nota del alumno es :   ' + nota)

let nombreApellido = 'Juan Batman' // se usa en java
let User = 'Juan Carlos'
let _usuario
let $user // se usa con node - angular
let nombre_apellido // Snake Case
let NombreApellido // Pascal Case


//No vaaaaan
// let 1ernombre
// let nombre-apellido
// let var super break this


//Tipos de Datos

////////// Strings

let str1 = ' String con comillas '
let str2 = " String con comillas dobles"
let strbackticks = `test`

console.log(str1 + 'y' + str2)

let str3 = 'JUAN'
let str4 = 'PEDRO'
let str5 = str3 + ' y ' + str4

console.log(str5)

let str6 =`${str1} y ${str2}`
console.log(str6)

//Tipado dinámico
let numero = 9
numero = 'hola'




////////// Number
let num1 = 2
//let num2 = 3.145234234
let num2 = 3

let num3 = Math.PI
console.log(num3)

console.log(num1+num2) // devuelve 5

let suma = num1 + num2
let producto = num1 * num2 
let resta = num1 - num2
let division = num1/num2
console.log(suma + producto + resta + division)

// console.log('La suma es ' + suma)
// let x 
// console.log(x)
// let producto = x*3
// console.log(producto)


// let valor1 = prompt('Por favor ingresa el primer valor')
// let valor2 = prompt('Por favor ingresa el segundo valor')
// console.log(valor1+valor2) //prompt concatena Strings

//parseInt ya que prompt te devuelve una cadena de strings.
// valor1 = parseInt(prompt('valor1'))
// valor2 = parseInt(prompt('valor2'))
// suma = valor1+valor2
// console.log(suma)

//parseFloat
// valor1 = parseFloat(prompt('valor1'))
// valor2 = parseFloat(prompt('valor2'))
// suma = valor1+valor2
// console.log(suma)

document.write('<h1> Este es el titulo </h1>') // escribimos en el html

