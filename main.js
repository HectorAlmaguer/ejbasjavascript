alert('Hola Mundo'); //hola mundo
/* comentario multilinea
Mi primer hola Mundo
*/
//Variables
var nombre = "Hector";
var apellido = "Almaguer";
var edad = 27;
//Cambio de valor de variable
edad = 18;

let telefono;
let colorfavorito = 'Azul';
let comidafav = 'Spaguetti';

telefono =123456;

alert(nombre+" "+apellido+" Tiene "+edad+" años.");
//Constantes
const gravedad = 9.8;
const estudiantes = 20;

//let y var diferencias
var numero = 40;
 if (true){
     var numero = 50;
     console.log(numero);
 }

 console.log(numero);

 var numero2 = 100;
 numero2 = 1000
 console.log(numero2);
 let otronumero = 100;
 if(true){
    let numero2 = 5;
    console.log(numero2);
    let numero3 = 27;
    console.log(numero3);
 }
console.log(numero2);//100
//console.log(numero3);
console.log(otronumero);
//Tipos de datos
console.log(typeof(nombre));
console.log(typeof(edad));
