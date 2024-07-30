window.onload = function (e) {
	
	var btnEntrar = document.getElementById("btnEntrar");

	var txtEmail  = document.getElementById("txtEmail");

	var txtSenha = document.getElementById("txtSenha");

	txtEmail.focus();

	btnEntrar.onclick = function(e) {

		e.preventDefault();

		var email = txtEmail.value;
		
		var senha = txtSenha.value;

		if(email == "") {
			exibirMensagemErro("Campo E-mail obrigatório");
		}
		else if(senha == "") {
			exibirMensagemErro("Campo Senha obrigatório");
		}
		else {
			realizarLogin(email, senha);
		}
	};

	function exibirMensagemErro(mensagem) {

		var spnErro = document.getElementById("spnErro");

		spnErro.innerText = mensagem;

		spnErro.style.display = "block";//elemento span fica vísivel.

		setTimeout(function () {
			spnErro.style.display = "none"; // elemento span volta a ficar invísivel após 5 segundos.
			}, 5000);
}

	function realizarLogin(email, senha) {
		
		alert("O login foi realizado para o usúario " + email);
	}
}