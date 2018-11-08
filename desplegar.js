
//Desplegar hamburguesa
function desplegarHamburguesa(){
 document.getElementById("dropdown").classList.toggle('mostrar');
}

function desplegar() {
 document.getElementById("mostrar-nav").addEventListener( 'click' , desplegarHamburguesa );
}

function plegarHamburguesa(){
 document.getElementById("dropdown").classList.toggle('mostrar');
}

function desplegar() {
 document.getElementById("ocultar-nav").addEventListener( 'click' , desplegarHamburguesa );
}

//Desplegar el menu de arriba
function changeClassTop(){
 document.getElementById("dropdownTop").classList.toggle('show');
}

function primera() {
 document.getElementById("open-hideTop").addEventListener( 'click' , changeClassTop );
}

//Desplegar el menu de abajo
function changeClassBottom(){
 document.getElementById("dropdownBottom").classList.toggle('show');
}

function segunda() {
  document.getElementById("open-hideBottom").addEventListener( 'click' , changeClassBottom ); 
}

function changeClassTop(){
 document.getElementById("dropdownTop").classList.toggle('show');
}

function changeClasstituloNasa(){
 document.getElementById("arrowTop").classList.toggle('on');
}

function changeClassPerfil(){
 document.getElementById("arrowBottom").classList.toggle('on');
}

function desplegardialog(){
 document.getElementById('miModal').style.display = 'block';
}

function mantenerShow(){
 document.getElementById("dropdownTop").classList.toggle('show');
}

function primera() {
 document.getElementById("abrir").addEventListener( 'click' , mantenerShow );
}

function desplegar (){
	document.getElementById("abrir").addEventListener( 'click' , desplegardialog );
	document.getElementById("mostrar-nav").addEventListener( 'click' , desplegarHamburguesa );
	document.getElementById("ocultar-nav").addEventListener( 'click' , desplegarHamburguesa );
	document.getElementById("open-hideTop").addEventListener( 'click' , changeClassTop );
	document.getElementById("open-hideTop").addEventListener( 'click' , changeClasstituloNasa );
	document.getElementById("open-hideBottom").addEventListener( 'click' , changeClassPerfil );
	document.getElementById("open-hideBottom").addEventListener( 'click' , changeClassBottom );	
	document.getElementById("abrir").addEventListener( 'click' , mantenerShow );
}

window.onload = desplegar;








