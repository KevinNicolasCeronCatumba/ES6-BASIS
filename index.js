//importar el componente sumar en commonjs
//const sumar = require('./sumar')
//const estudiante = require('./estudiante')
var colors = require('colors')
const materias = require('./materias')

//importar el componente sumar en es6moule
//import sumar from './sumar.js'
//import {sumar,restar} from './sumar.js'

/*
//tipos d variable:
//let : crear variables en el sentido extricto de la palabra
//let a = 10
//const: se diferencias de las variables tipo let, en la definicion no se les puede cambiar
//const b = 20

//funcion para sumar (para js es un componente y se puede llamar desde otro archvo)
function sumar(a,b){
    return a+b
}

//console.log(`Suma de numeros : ${sumar(a,b)}`.bgCyan.green.underline)
//console.log(`Resta de numeros : ${restar(a,b)}`)

*/



/*
//Desestructurar objeto:
//desmenusar cada dato del objeto y ponerlo en variables
let{first_name,last_name} = estudiante

console.log(`Datos del estudiante`.bgCyan.green.underline)
console.log(`Nombre: ${first_name}`.cyan)
console.log(`Apellidos: ${last_name}`.cyan)
console.log(`--------------------`.bgCyan.green.underline)
*/


//crear una nueva materia y ponerla en arreglo de materia
//push()
materias.push({
    nombre: "Sociales",
    instructor :"Gonzalo Rivera",
    notas:[
        5.0,
        4.8,
        4.9
    ],
    tipo: "Transversal"
})


console.log(`--------------------`.bgCyan.green.underline)
//Recorrido del arreglo
//materias.forEach(function(materia){
materias.forEach((materia) =>{
    console.log(`Nombre : ${materia.nombre}`.cyan,`Instuctor : ${materia.instructor}`)
    /*if(materia.instructor === 'Cristian Buitrago'){
        console.log(`Nombre : ${materia.nombre}`.cyan,`Instuctor : ${materia.instructor}`)
    }*/
})
console.log(`--------------------`.green.underline)

//actualizar
//1. encontrar elemento a actualizar: findIndex
console.log(`--------ACTUALIZAR--------`.bgGray.gray.underline)
console.log(materias)
console.log(`------actualizado------`.green.underline)
let indice = materias.findIndex((materia)=>materia.instructor === "Cristian Buitrago")
console.log(indice)
materias[indice].instructor ="Tatiana Cabrera";
prueba=materias[indice].notas = [3.2, 5.0];

console.log(prueba)
console.log(materias)


//elimiar materia: splice
console.log(`--------ELIMINAR--------`.bgGray.gray.underline)
materias.forEach((materia) =>{
    console.log(`Nombre : ${materia.nombre}`.cyan,`Instuctor : ${materia.instructor}`)
})
console.log(`------eliminado------`.green.underline)
materias.splice(4,1)
materias.forEach((materia) =>{
    console.log(`Nombre : ${materia.nombre}`.cyan,`Instuctor : ${materia.instructor}`)
})


/*



//map : metodo de arreglos en es6,, crea un arreglo a partir de otro
//const profesores = materias.map(function(materia){
const profesores = materias.map((materia)=>{
    return materia.instructor
})
console.log(profesores)
console.log(`--------------------`.green.underline)
//filter  sirve para localizar elementos de un areglo que cumplan cierta condicion
//find para solo la primera ocurrencia
const PHP = materias.filter((materia)=>{
    return materia.instructor==="Cristian Buitrago"

})
console.log(PHP)



*/console.log(`--------------------`.bgCyan.green.underline)