window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var caixaN1 = document.getElementById("caixaN1");

    var caixaN2 = document.getElementById("caixaN2");

    var caixaN3 = document.getElementById("caixaN3");


    btn1.onclick = function (e) {

        var nome = caixaN1.value;

        var numero1 = caixaN2.value;

        var numero2 = caixaN3.value;

        pagamento(nome,numero1, numero2);
    }

    function pagamento(nome, numero2, numero3) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/salario?nome=" + nome + "&recebePHora="+ numero1 + "&horasMensais=" +numero2);

        xhr.send();
    }
}