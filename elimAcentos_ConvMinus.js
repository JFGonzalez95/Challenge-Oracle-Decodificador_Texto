function elimAcentos_ConvMinus(texto) {
    var acento = texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    var ConverMinus = acento.toLowerCase();
    return ConverMinus;
}