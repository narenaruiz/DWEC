function division() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var division = input1 / 19;

    //Utilizo el toFixed(x) para limitar el numero de decimales a lo que yo ponga.
    var resultado = division.toFixed(3);

    if (input1 >= 0) {
        document.getElementById("results").innerHTML = "El resultado de la division es: " + resultado
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "El resultado de la division es: " + resultado
        } else {
            document.getElementById("results").innerHTML = "No es un numero"
        }
    }

}