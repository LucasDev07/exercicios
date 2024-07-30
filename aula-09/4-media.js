window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var caixaNumero1 = document.getElementById("caixaNumero1");

    var caixaNumero2 = document.getElementById("caixaNumero2");



    btn1.onclick = function (e) {

        var numero1 = caixaNumero1.value;

        var numero2 = caixaNumero2.value;

        media(numero1, numero2);
    }

    function media(numero1, numero2) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/calculoMedia?valor1=" numero1 + "&valor2=" + numero2);

        xhr.send();
    }
}