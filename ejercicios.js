/*
Var nombre=prompt("¿Como te llamas?");
document.write('Hola '+nombre+', saludos desde Javascript');
*/
function suma(num1,num2){
    let resultado = num1+num2;
    document.write("La suma es: ", resultado,"</br>");
}
function resta(num1,num2){
    let resultado = num1-num2;
    document.write("La resta es: ",resultado,"</br>")
}
function mul(num1,num2){
    let resultado = num1*num2;
    document.write("La multiplicacion es: ",resultado,"</br>")
}
function div(num1,num2){
    let resultado = num1/num2;
    document.write("La division es: ",resultado,"</br>")
}
var valor1 = parseInt(prompt("Teclea un valor: "));
var valor2 = parseInt(prompt("Teclea un segundo valor: "));
suma(valor1,valor2);
/*if(num1>num2){
    resta(valor1,valor2);
}else{
    resta(valor2,valor1);
}*/
resta(valor1,valor2);
mul(valor1,valor2);
if(valor2!=0){
    div(valor1,valor2);
}else{
    document.write("No se puede dividir entre 0");
}

function operaciones(num1,num2){
    let suma=num1+num2;
    let resta=num1-num2;
    let mul=num1*num2;
    let div=num1/num2;
    document.write("La suma es: ", suma,"</br>");
    document.write("La resta es: ", resta,"</br>");
    document.write("La multiplicacion es: ", mul,"</br>");
    document.write("La div es: ", div,"</br>");
}

var valor1 = parseInt(prompt("Teclea un valor: "));
var valor2 = parseInt(prompt("Teclea un segundo valor: "));
operaciones(valor1,valor2);