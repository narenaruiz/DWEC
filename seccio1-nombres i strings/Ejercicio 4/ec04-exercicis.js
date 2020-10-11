function quitarEntero() {

    /*
    No se si esta bien, me salen los decimales pero no son exactos, ademas no solo estan los
    decimales sino que tambien esta el "0" . He probado de hacer un split pero no me funciona.
    */

    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    //Utilizo el Math.trunc(x) con el cual el numero que le pases te lo devolvera sin decimales.
    var numeroEntero = Math.trunc(input1)

    //Ahora le resto al numero original su numero entero y asi consigo sus decimales.
    var resultado = input1 - numeroEntero;

    if (input1 >= 0) {
        document.getElementById("results").innerHTML = "El numero sin entero es: " + resultado
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "El numero sin entero es: " + resultado
        } else {
            document.getElementById("results").innerHTML = "No es un numero"
        }
    }

}