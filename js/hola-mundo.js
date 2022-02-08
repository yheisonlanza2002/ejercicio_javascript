"Use strict"
// ejercicio n° 1
console.log("hola mundo java");


// ejercicio n° 2
var nombre = "(sr.) yheison lanza";
if(nombre){
    console.log("bienvenido " +nombre)
};

//ejercicio n° 3

var nombres = "yheison";
var genero = "masculino";

if (genero == "masculino"){
    console.log("bienvenido " +nombres);
}else if(genero == "femenino"){
    console.log("bienvenida " +nombres);
}else{
    console.log("no ha definido sexo");
};
// ejercicio n° 4

// var costo_inicial = "150000";
// var descuento;
// var ahorro ;

// if(costo_inicial < 30000){
//     console.log("usted no tiene descuento");
// }else
// if(costo_inicial >= 30000 && costo_inicial < 100000){
//     descuento = costo_inicial * 0.05;
//     ahorro = costo_inicial - descuento;
// }else
// if(costo_inicial > 100000){
//     descuento = costo_inicial * 0.10;
//     ahorro = costo_inicial - descuento;
// }
// console.log("el precio inicial es de " + costo_inicial +" el descuemto es de " + descuento + " para un valor de final de " + ahorro)

// nuevo

var costo_inicial = "190000";
var descuento;
var ahorro ;
var descu_5 = 5;
var descu_10 =10;

if(costo_inicial < 30000){
    console.log("usted no tiene descuento");
}else
if(costo_inicial >= 30000 && costo_inicial < 100000){
    descuento = (costo_inicial * descu_5)/100;
    ahorro = costo_inicial - descuento;
    console.log("El valor es de el producto es " + costo_inicial + " el descuento es de el "  + descu_5  +" % y el total a pagar es de " + ahorro +  " ahore " + descuento + " pesos");
}else
if(costo_inicial > 100000){
    descuento = (costo_inicial * descu_10)/100;
    ahorro = costo_inicial - descuento;
    console.log("El valor es de el producto es " + costo_inicial + " el descuento es de el "  + descu_10  +" % y el total a pagar es de " + ahorro +  " ahore " + descuento + " pesos");
}
