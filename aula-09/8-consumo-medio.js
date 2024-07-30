window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var caixaN1 = document.getElementById("caixaN1");

    var caixaN2 = document.getElementById("caixaN2");


    btn1.onclick = function (e) {

        var numero1 = caixaN1.value;

        var numero2 = caixaN2.value;

        consumoMedio(numero1, numero2);
    }

    function consumoMedio(numero1, numero2) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/consumoVeiculo?distanciaPercorridaKm=" + numero1 + "&combustivelGasto=" + numero2);

        xhr.send();
    }
}