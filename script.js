// PROGRAMA PRINCIPAL:

var TextoIngresado = document.querySelector("#input-texto")
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");


    console.log(TextoIngresado);
    TextoIngresado.addEventListener("input",function(){
        console.log("Escribieron en el imput");
        TextoIngresado.value = validacionesEncrip(TextoIngresado.value);
        botonEncriptar.addEventListener("click",function(event){
            event.preventDefault();
            procesoEcripta(TextoIngresado.value);
            })
        
        botonDesencriptar.addEventListener("click", function(event){
            event.preventDefault();
            procesoDesencrip(TextoIngresado.value);            
        })         

    })      

// ***************************************************
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* 
Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras
*/