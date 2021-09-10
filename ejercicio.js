var edad = prompt('Cual es tu edad?');
var nombre= prompt("Cual es tu nombre");
if (edad>=18 && edad<=29){
    //console.log('Felicidades has sido aceptado en el bootcamp de generation');  
    document.write('Felicidades '+nombre+' has sido aceptado en el bootcamp de generation');
}else{
    //console.log('No cumples con los requisitos del programa.');  
    document.write('No cumples con los requisitos del programa '+nombre);
}