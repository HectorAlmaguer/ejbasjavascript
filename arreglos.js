var num1=parseInt(prompt('Teclea un digito'));
var num2=parseInt(prompt('Teclea un digito'));
var num3=parseInt(prompt('Teclea un digito'));
    if(num1>=num2 && num1>=num3){
        console.log("El mayor es: "+num1);
    }else if(num2>num3){
        console.log("El mayor es: "+num2);
    }else{
        console.log("El mayor es: "+num3)
    }

function mayor(){
    var numeros=[];
    numeros[0]=prompt('Teclea un digito');
    numeros[1]=prompt('Teclea un digito');
    numeros[2]=prompt('Teclea un digito');
    console.log(numeros);
    numeros.sort(function(a, b){return a - b});//ordenar
    console.log(numeros);
    numeros.reverse(); //mayor a menor
    console.log(numeros);
}
mayor();


function ordenatext(){
    var palabras=[];
    palabras[0]=prompt('Teclea una frase');
    palabras[1]=prompt('Teclea una frase');
    palabras[2]=prompt('Teclea una frase');
    console.log(palabras);
    palabras.sort();//ordenar
    console.log(palabras);
    palabras.reverse(); //mayor a menor
    console.log(palabras);
}
ordenatext();


var cantidad=[];
var c1 = parseInt(prompt('introduce la primera cantidad'));
cantidad.push(c1);
var c2 = parseInt(prompt('introduce la segunda cantidad'));
cantidad.push(c2);
var c3 = parseInt(prompt('introduce la tercera cantidad'));
cantidad.push(c3)
document.write('<br/>',cantidad);
cantidad.sort(function(a,b){return a - b});
document.write('<br/>',cantidad);
cantidad.reverse();
document.write('<br/>',cantidad);
document.write('<br/>la cantidad mayor es:', cantidad[0]);
