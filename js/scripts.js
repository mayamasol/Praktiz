var cmdEnviar;
function Iniciar(){
    console.log("Iniciando...");
    cmdEnviar = document.getElementById("cmdEnviar")
    cmdEnviar.addEventListener("click", Mostrar, false);
}

function Mostrar(){
    let lblSalida = document.getElementById("etqMostrar");
    let strTexto = "Ay! papá";
    console.log(strTexto);
    let intNumero = 1966;
    strTexto += " - " + intNumero;
    lblSalida.innerHTML = strTexto;
    //    return "";
}

window.addEventListener("load", Iniciar,false);