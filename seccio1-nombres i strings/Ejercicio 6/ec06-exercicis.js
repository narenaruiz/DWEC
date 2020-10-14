function comprobarString() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;


    //Cuando el numero es 0 o cuando el string es "" se considera vacio.
    if (input1 == 0 || input1 == "") {
        document.getElementById("results").innerHTML = "El contenido de la casilla se considera vacio"
    } else {
        document.getElementById("results").innerHTML = "El contenido de la casilla no esta vacio, es: " + input1
    }
}