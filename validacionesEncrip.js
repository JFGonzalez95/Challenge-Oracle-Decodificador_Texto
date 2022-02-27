function validacionesEncrip(TextoIngresado){
    TextoIngresado = elimAcentos_ConvMinus(TextoIngresado);
    console.log(TextoIngresado);
    var palabra = TextoIngresado;
    var validacion = existenNumeros(palabra);
        if (validacion == ""){
            TextoIngresado="";
        }
        else{
            validacion;
        }
    return validacion;
}