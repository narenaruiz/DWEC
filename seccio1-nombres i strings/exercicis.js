// Ejercicio 1
function numero_signe() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    console.log("El numero introduit es " + input1)

    if (input1 > 0) {
        document.getElementById("results").innerHTML = "POSITIU"
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "NEGATIU"
        } else {
            document.getElementById("results").innerHTML = "ES ZERO"
        }
    }
}

//Ejercicio 2
function comprobacion() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    console.log("El numero introduit es " + input1)

    /*
    Lo que hago es comprobar si el input contiene un numero mayor, menor o igual a 0 y si
    no cumple ninguna de estas condiciones significara que no es un numero
    */
    if (input1 >= 0) {
        document.getElementById("results").innerHTML = "Es un numero"
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "Es un numero"
        } else {
            document.getElementById("results").innerHTML = "No es un numero"
        }
    }
}

//Ejercicio 3
function quitarDecimales() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    console.log("El numero introduit es " + input1)

    if (input1 >= 0) {
        //Utilizo el Math.trunc(x) con el cual el numero que le pases te lo devolvera sin decimales.
        document.getElementById("results").innerHTML = "El numero sin decimales es: " + Math.trunc(input1)
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "El numero sin decimales es: " + Math.trunc(input1)
        } else {
            document.getElementById("results").innerHTML = "No es un numero"
        }
    }

}

//Ejercicio 4
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

//Ejercicio 5
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

//Ejercicio 6
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

//Ejercicio 7
function invertirString() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var length = input1.length;

    //http://lineadecodigo.com/javascript/invertir-una-cadena-en-javascript/#:~:text=Para%20invertir%20una%20cadena%20lo,que%20ser%C3%A1%20la%20cadena%20invertida.&text=En%20cada%20vuelta%20del%20bucle,iremos%20componiendo%20la%20cadena%20invertida.
    //while () {}
}