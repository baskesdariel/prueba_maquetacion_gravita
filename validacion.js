function validar(){

if(document.getElementById('login').value == 'dariel' && document.getElementById('password').value == '1234' ){
    window.location.href ='dashboard.html';
    return false;
} else{
  document.getElementById('formulario').innerHTML='<div><p>usuario o contraseña incorrectos</p></div><a href="login.html">volver</a>';

	}
}


