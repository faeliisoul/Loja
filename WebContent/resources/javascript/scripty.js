
function invalidarSession(contexto, session){
	document.location = (context + pagina + ".jsf");
}

function validarSenhaLogin(){
	j_username = document.getElementById("j_username").value;
	j_password = document.getElementById("j_password").value;
	
	if (j_username === null || j_username.trim() === ''){
		alert("Informe o login.");
		$('#j_username').focus();
		return false;
	}
	
	if (j_password === null || j_password.trim() === ''){
		alert("Informe a senha.");
		$('#j_password').focus();
		return false;
	}
	
	return true;
}