function procesoEcripta(cadena){
    var frase = EncriptarVocales(cadena);
    var palabra = removerComas(frase);
    console.log(palabra);
    textEncriptado(palabra);
    copyText_Encrip(palabra);
}
