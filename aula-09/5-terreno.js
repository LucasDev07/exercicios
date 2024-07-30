window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var caixaNumero1 = document.getElementById("caixaNumero1");

    var caixaNumero2 = document.getElementById("caixaNumero2");

    var caixaNumero3 = document.getElementById("caixaNumero3");


    btn1.onclick = function (e) {

        var numero1 = caixaNumero1.value;

        var numero2 = caixaNumero2.value;

        var numero3 = caixaNumero3.value;

        terreno(numero1, numero2, numero3);
    }

    function terreno(numero1, numero2, numero3) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/areaEPrecoTerreno?largura="+ numero1 + "&comprimento="+ numero2 + "&valorm2=" + numero3);

        xhr.send();
        

    }    
}