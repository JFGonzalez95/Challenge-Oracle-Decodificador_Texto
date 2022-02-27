function procesoDesencrip(cadena){
    var expresionRegular = new RegExp(/enter/g); 
    var newInfo2 = cadena.replaceAll(expresionRegular,'e'); 
    var expresionRegular = new RegExp(/imes/g); 
    var newInfo3 = newInfo2.replaceAll(expresionRegular,'i'); 
    var expresionRegular = new RegExp(/ai/g); 
    var newInfo4 = newInfo3.replaceAll(expresionRegular,'a'); 
    var expresionRegular = new RegExp(/ober/g); 
    var newInfo5 = newInfo4.replaceAll(expresionRegular,'o'); 
    var expresionRegular = new RegExp(/ufat/g); 
    var newInfo6 = newInfo5.replaceAll(expresionRegular,'u');
    var msgDesencriptado = document.querySelector("#msg");
    msgDesencriptado.value = newInfo6;
} 
