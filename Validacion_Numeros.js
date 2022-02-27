function existenNumeros(textoValidacion){
    numeros = [0,1,2,3,4,5,6,7,8,9];
    lista = [];
    var resultado ="";

        for (i=0; i < textoValidacion.length ; i++){
            var letra = textoValidacion[i];
            if (letra == " "){
                var comodin ="-"
                lista.push(comodin);
            }
            else{
                lista.push(letra);
            }            
            console.log(lista);
        }
    
    OUTER_LOOP:for (e=0; e < lista.length ; e++){
                    for (u=0; u<numeros.length ; u++){
                        if (lista[e] == numeros[u]){
                            alert("Recuerde solo letras minusculas,!No se permiten Numeros¡.Ingrese nuevamente el texto a encriptar.")           
                            resultado="";
                            break OUTER_LOOP;
                        }
                        else{
                            resultado = textoValidacion;

                        }
                    }
                }
    return resultado;
    
}


