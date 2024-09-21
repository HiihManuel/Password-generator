// Esta variable determina el valor minimo de caracteres que debe tener la contaseña
let tamañoContaseña = 6;
const cadenaCaracteres= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
let cantidad = document.getElementById('cantidad');
let contasena = document.getElementById('contrasena');
let limpiarBtn = document.getElementById('limpiar');
let mensajeGenerado_id = document.getElementById('mensajeGenerado');


function generar(){

    asignarTextoElemento('mensajeGenerado','');

    let numeroDigitado = parseInt(cantidad.value);
  
    if (isNaN(numeroDigitado)) {
        alert("Debes ingresar un valor")
    }
    else{

        if(numeroDigitado < tamañoContaseña){
            cantidad.value = ''; 
            setTimeout(() => {
                alert("La cantidad de caracteres debe ser de mínimo " + tamañoContaseña);
            }, 0);
        } 
        else{
            let password = '';
            for(let contador = 0; contador < numeroDigitado; contador++){
                let caraterAleatoreo = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
                password += caraterAleatoreo;
            }
    
            comparar(password);
    
            contasena.value = password;
    
            limpiarBtn.style.display = 'block';
        }
    }
}

function comparar (password){
    if( ! (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()]/.test(password))){
        asignarTextoElemento('mensajeGenerado', 'La contraseña es debil debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.')
        mensajeGenerado_id.style.color ='#df8e8e'
    }
    else{
        asignarTextoElemento('mensajeGenerado','La contraseña es fuerte');
        mensajeGenerado_id.style.color ='#62fd62';
    }
    
}

function asignarTextoElemento(id, texto){
    let elementoHTML = document.getElementById(id);
    if(elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}


function limpiar(){
    asignarTextoElemento('mensajeGenerado','');
    limpiarBtn.style.display = 'none';
    contasena.value = '';
}
