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
    No se como hacer para que imprima el string usando el indexof.
    */

    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var lengthEntero = input1.indexOf(".");

    //Cosas utiles:
    //https://frontendlabs.io/2456--javascript-ejemplos-substring-split-replace-trim
    //https://www.iteramos.com/pregunta/25872/-obtener-la-porcion-decimal-de-un-numero-con-javascript-

    var decimales = input1.split(".", lengthEntero);
    /*
    El lengthEntero creo que no me sirve para nada
    porque me funciona bien estando o sin estar
    */

    document.getElementById("results").innerHTML = decimales[1];


    /* Este metodo funciona pero no es del todo correcto:

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
    */

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

    //http://lineadecodigo.com/javascript/invertir-una-cadena-en-javascript/#:~:text=Para%20invertir%20una%20cadena%20lo,que%20ser%C3%A1%20la%20cadena%20invertida.&text=En%20cada%20vuelta%20del%20bucle,iremos%20componiendo%20la%20cadena%20invertida.

    var length = input1.length;
    var cadenaInvertida = "";

    while (length >= 0) {
        cadenaInvertida += input1.charAt(length);
        length--;
    }
    document.getElementById("results").innerHTML = cadenaInvertida
}

//Ejercicio 8
function contarLaLetraA() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var length = input1.length;
    var contador = 0;

    for (var x = 0; x < length; x++) {
        if (input1.charAt(x) == "A") {
            contador++;
        } else if (input1.charAt(x) == "a") {
            contador++;
        }

    }

    document.getElementById("results").innerHTML = "El numero de 'A' que hay es:" + contador
}

//Ejercicio 9
function antesDeA() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    /*
    Funciona pero solo con las 'a' minisculas no
    me funciona con la mayusculas y ademas doy
    por sentado que hay alguna 'a'
    */
    var separacionDeA = input1.split("a");

    document.getElementById("results").innerHTML = separacionDeA[0];
}

//Ejercicio 10
function posiciones_Primera_Ultima_A() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var posicionPrimeraA;
    var posicionUltimaA = 0;

    for (var x = 0; x < input1.length; x++) {
        if (input1.charAt(x) == "A") {
            if (posicionPrimeraA === undefined) {
                posicionPrimeraA = x;
            } else if (posicionUltimaA < x) {
                posicionUltimaA = x;
            }
        } else if (input1.charAt(x) == "a") {
            if (posicionPrimeraA === undefined) {
                posicionPrimeraA = x;
            } else if (posicionUltimaA < x) {
                posicionUltimaA = x;
            }
        }
    }
    document.getElementById("results").innerHTML = "La 'A' del principio es:" + posicionPrimeraA + " y la final es: " + posicionUltimaA;
}

//Ejercicio 11
function quitarLa() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    //Con el gi haces que remplace todos
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace
    document.getElementById("results").innerHTML = input1.replace(/la/gi, "")
}

//Ejercicio 12
function substituirLa() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/la/gi, "*")
}

//Ejercicio 13
function delante_Y_Detras() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var letraInicial = input1.charAt(0);

    var nuevoInput = letraInicial + input1 + letraInicial;

    document.getElementById("results").innerHTML = nuevoInput;
}

//Ejercicio 14
function quitarEspacios() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/ /gi, "")
}

//Ejercicio 15
function cambioEspaciosPorGuiones() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var nuevoString = "";

    for (x = 0; x < input1.length; x++) {
        if (input1[x] != " ") {
            nuevoString += input1[x];
        } else {
            if (input1[x + 1] != " ") {
                nuevoString += input1[x]
            }
        }
    }

    document.getElementById("results").innerHTML = nuevoString.replace(/ /gi, "-")
}

//Ejercicio 16
function crearAcronimo() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var nuevoString = input1[0].toUpperCase();

    for (x = 0; x < input1.length; x++) {
        if (input1[x] == " ") {
            nuevoString += input1[x + 1].toUpperCase();
        }
    }
    document.getElementById("results").innerHTML = nuevoString
}

//Ejercicio 17
function validarCorreoElectrico() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    var countArroba = 0;
    var extension = input1[input1.length - 4] + input1[input1.length - 3] + input1[input1.length - 2] + input1[input1.length - 1];
    var validArroba = false;
    var validExtension = false;
    for (i = 0; i < input1.length; i++) {
        if (input1[i] == "@") {
            countArroba++;
        }
    }
    if (extension == ".net" || extension == ".com" || extension == ".org") {
        validExtension = true;
    }
    if (countArroba == 1) {
        validArroba = true;
    }
    if (validArroba && validExtension) {
        document.getElementById("results").innerHTML = "correo valido";
    } else if (validArroba) {
        document.getElementById("results").innerHTML = "extensión mal";
    } else if (validExtension) {
        document.getElementById("results").innerHTML = "arroba mal";
    } else {
        document.getElementById("results").innerHTML = "introducelo de nuevo";
    }
}