window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var txtCaixaDeTextoNumero1 = document.getElementById("txtCaixaDeTextoNumero1");

    var txtCaixaDeTextoNumero2 = document.getElementById("txtCaixaDeTextoNumero2");

    

    btn1.onclick = function (e) {

        var valor1 = txtCaixaDeTextoNumero1.value;

        var valor2 = txtCaixaDeTextoNumero2.value;

         somar(valor1, valor2);
    }

    function somar(valor1, valor2) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/somar?valor1="+  valor1 + "&valor2=" + valor2);

        xhr.send();
    }
}