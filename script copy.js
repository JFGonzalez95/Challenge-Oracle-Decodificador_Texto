

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("Usted hizo click en Desencriptar")
})

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("Usted hizo click en Copiar")
})


var TextoIngresado = document.querySelector("#input-texto")
    console.log(TextoIngresado);
    TextoIngresado.addEventListener("input",function(){
        console.log("Escribieron en el imput");
        TextoIngresado.value = ConverMinus(TextoIngresado.value);
        console.log(TextoIngresado.value);
        var palabra = TextoIngresado.value;
        var cadena = EncriptarVocales(palabra);
        cadena = cadena.replaceAll(",","")
        console.log(cadena);
        ddd(cadena);
            

    })

    
function ddd(cadena){
    var mensajeEncriptado = document.querySelector("#msg");
    var botonEncriptar = document.querySelector("#btn-encriptar");
    botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    //console.log("Usted hizo click en Encriptar")
    botonEncriptar.onclick = mensajeEncriptado.value = cadena; 
    })
          
            
}


/*
var ejemplo = "juan"
var cadena = EncriptarVocales(ejemplo);

console.log(resultado);
var frase = resultado.toString()
console.log(frase);

cadena = cadena.replaceAll(",","")

console.log(cadena);
*/

function ConverMinus (texto){
    var conversion = texto.toLowerCase();
    return conversion;
}

function EncriptarVocales(palabra){
    resultado = []
    for (i = 0; i < palabra.length; i++){
        var letra = palabra[i];
        console.log(palabra[i]);
        switch(letra){
            case "a":
                resultado.push("ai");
                break;
            case "e":
                resultado.push("enter");
                break;
            case "i":
                resultado.push("imes");
                break;
            case "o":
                resultado.push("ober");
                break;
            case "u":
                resultado.push("ufat");
                break;
            default:
                resultado.push(letra);
        }
    }
    return resultado.toString();
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/