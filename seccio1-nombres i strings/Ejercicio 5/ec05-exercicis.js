function division() {
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