function validar(){

if(document.getElementById('login').value == 'dariel' && document.getElementById('password').value == '1234' ){
    window.location.href ='dashboard.html';
    return false;
} else{
  document.getElementById('formulario').innerHTML='<div class="Error"><p>Usuario o contraseña incorrectos</p><a href="login.html">volver</a></div>';

	}
}



