const cipher = {
  encode: function(desp, mens){

    if(mens.length == 0 && desp.length == 0){     
      //throw new TypeError("Ingrese mensaje y numero de desplazamiento")
      throw TypeError("Ingrese mensaje y numero de desplazamiento");
    }

    let resultado="";
    if (mens.length != 0 && isNaN(desp) == false && desp.length != 0) {      
   
     for (let i= 0; i < mens.length; i++) {   

      if(mens[i] != " "){
        let  mensaje= mens.charCodeAt(i);       
        resultado += String.fromCharCode(((mensaje -65 + parseInt(desp))%26)+65);       
        //console.log(resultado);    
      }
      else{        
        resultado = resultado + " ";
      }      
    }
  }
  // else if(mens.length == 0 && desp.length == 0){     
  //   alert("Ingrese mensaje y numero de desplazamiento");

  //}
   else if (mens.length != 0 && (isNaN(desp) == true || desp.length == 0) ){
    alert("Ingrese el desplazamiento (debe ser NUMERICO)");
  
  }else if(mens.length == 0 && (isNaN(desp) == true || isNaN(desp) == false)){
    alert("Ingrese Mensaje");
  }  


    return resultado;   
    
    
  },

  decode: function(desp, mens){

    let resultado="";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desp = (parseInt(desp) % 26 -26)% 26;   
   
    for (let i = 0; i < mens.length; i++) {  

      
       if(letras.indexOf(mens[i]) != -1){
        let posicion = ((letras.indexOf(mens[i]) - desp) % 26);
        resultado += letras[posicion];
        
       //console.log(resultado);
        }
        else {
          resultado += " ";
        }      

      
    }
  
      
    

    return resultado;

       

  }
};

export default cipher;
