/*----------------------------SELECCION DE ELEMENTOS---------------------------------------------------*/
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEcriptar = document.querySelector(".encriptar");
const aviso =document.querySelector(".texto-aviso");
const respuesta =  document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")
 //----------------------BOTON DE ENCRIPTAR-----------------------//
 btnEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEcriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    if(texto == ""){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);

        

    }
    else if(texto !== txt){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500); 
    }
    else if(texto != texto.toLowerCase()){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en mayuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        texto = texto.replace(/a/mg, "ai");
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

 })


 //----------------------BOTON DE DESENCRIPTAR-----------------------//
 btnDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEcriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    if(texto == ""){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);

        

    }
    else if(texto !== txt){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500); 
    }
    else if(texto != texto.toLowerCase()){
        aviso.style.background="#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en mayuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }
    else {
        
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/ai/mg, "a");
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

 })
 //----------------------BOTON DE COPIAR-----------------------//
 btnCopiar.addEventListener("click", e=> {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select(); 
    document.execCommand('copy');
 });

