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

