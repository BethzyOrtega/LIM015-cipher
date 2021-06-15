import cipher from './cipher.js';

//console.log(cipher);

 document.getElementById("txtaMensaje").addEventListener("keyup", function(){
  txtaMensaje.value = txtaMensaje.value.toUpperCase();
  });


let btnCifrar = document.getElementById("btnCifrar");

function cifrar (){
    const mensaje1 = document.getElementById("txtaMensaje").value;
    //const mensaje2 = mensaje1.toUpperCase();
    let desplazamiento = document.getElementById("txtDes").value;


    document.getElementById("textaCifrado").value = cipher.encode(desplazamiento,mensaje1);    

}
btnCifrar.addEventListener("click", cifrar);

let btnDescifrar = document.getElementById("btnDescifra");

function descifrar(){

    let mensaje3 = document.getElementById("textaCifrado").value;
    let desplazamiento1 = document.getElementById("txtDes").value;

    document.getElementById("textaCifrado").value = cipher.decode(desplazamiento1, mensaje3);

}

btnDescifrar.addEventListener("click", descifrar);
