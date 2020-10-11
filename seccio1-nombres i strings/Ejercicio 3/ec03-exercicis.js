function comprobacion() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    console.log("El numero introduit es " + input1)

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