function copyText_Encrip(cadena){
    var botonCopiar = document.querySelector("#btn-copy");
    var mensajeEncriptado = document.querySelector("#msg")
    botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    //console.log("Usted hizo click en Copiar")
    mensajeEncriptado.focus();
    document.execCommand("selectALL");
    document.execCommand("copy");
    })
}

