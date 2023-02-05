//Crarga
window.onload = function() {
	var loader = document.getElementById('loader');
	loader.style.visibility = 'hidden';
	loader.style.opacity = '0';
}
//Cursor
function isTouchDevice() {
return(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
const isTouch = isTouchDevice();
if(!isTouch) {
const cursorEl = document.querySelector('.js-cursor');
const isClickedClass = 'is-clicked';
const isHiddenClass = 'is-hidden';
const isLinkHoveredClass = 'is-link-hovered';
const hasCustomCursorClass = 'has-custom-cursor';
const addEventListeners = () => {
	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mousedown", onMouseDown);
	document.addEventListener("mouseup", onMouseUp);
	document.addEventListener("mouseenter", onMouseEnter);
	document.addEventListener("mouseleave", onMouseLeave);
	handleLinkHoverEvents();
};
const onMouseMove = (e) => {
	cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
	cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
};
const onMouseDown = () => {
	cursorEl.classList.add(isClickedClass);
};
const onMouseUp = () => {
	cursorEl.classList.remove(isClickedClass);
};
const onMouseEnter = () => {
	cursorEl.classList.remove(isHiddenClass);
};
const onMouseLeave = () => {
	cursorEl.classList.add(isHiddenClass);
};
const handleLinkHoverEvents = () => {
	document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
		el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass));
		el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass));
	});
};
addEventListeners();
document.body.classList.add(hasCustomCursorClass);
}
//Modal1
const abrirmodal = document.querySelector("#button_cv_abrir");
const cerrarmodal = document.querySelector("#button_cv_cerrar");
const modal = document.querySelector("#modal");
abrirmodal.addEventListener("click", () => {
modal.showModal();
})
cerrarmodal.addEventListener("click", () => {
	modal.close();
})
//Animaciones
window.addEventListener('scroll', function() {
let animacion = document.getElementById("pro_cont");
let posicionObj1 = animacion.getBoundingClientRect().top;
let tamañoDePantalla = window.innerHeight / 1;
if(posicionObj1 < tamañoDePantalla) {
	animacion.style.animation = "iz 2s ease-out"
}
})
window.addEventListener('scroll', function() {
let animacion = document.getElementById("len_cont");
let posicionObj1 = animacion.getBoundingClientRect().top;
let tamañoDePantalla = window.innerHeight / 1;
if(posicionObj1 < tamañoDePantalla) {
	animacion.style.animation = "iz 2s ease-out"
}
})
window.addEventListener('scroll', function() {
let animacion = document.getElementById("tec_cont_cont1");
let posicionObj1 = animacion.getBoundingClientRect().top;
let tamañoDePantalla = window.innerHeight / 1;
if(posicionObj1 < tamañoDePantalla) {
	animacion.style.animation = "iz 2s ease-out"
}
})
window.addEventListener('scroll', function() {
let animacion = document.getElementById("tec_cont_cont2");
let posicionObj1 = animacion.getBoundingClientRect().top;
let tamañoDePantalla = window.innerHeight / 1;
if(posicionObj1 < tamañoDePantalla) {
	animacion.style.animation = "iz 2s ease-out"
}
})
window.addEventListener('scroll', function() {
let animacion = document.getElementById("res_cont_cont");
let posicionObj1 = animacion.getBoundingClientRect().top;
let tamañoDePantalla = window.innerHeight / 1;
if(posicionObj1 < tamañoDePantalla) {
	animacion.style.animation = "iz 2s ease-out"
}
})
window.addEventListener('scroll', function() {
	let animacion = document.getElementById("con_cont");
	let posicionObj1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight / 1;
	if(posicionObj1 < tamañoDePantalla) {
		animacion.style.animation = "iz 2s ease-out"
	}
})
//Aniscroll nav
window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	var navbarNav = document.querySelector("#navbarNav");
	header.classList.toggle("abajo", window.scrollY > 0);
	navbarNav.classList.toggle("abajo", window.scrollY > 0);
})
//fullscreen
var box = document.getElementById('in'),
header = document.getElementById('header'),
contador = 0;

function cambio() {
if(contador == 0) {
	box.classList.add('fullscreen');
	header.classList.add('fullscreen');
	contador = 1;
} else {
	box.classList.remove('fullscreen');
	header.classList.remove('fullscreen');
	contador = 0;
}
}
btn1.addEventListener('click', cambio, true);
btn2.addEventListener('click', cambio, true);
btn3.addEventListener('click', cambio, true);
btn4.addEventListener('click', cambio, true);
btn5.addEventListener('click', cambio, true);
btn6.addEventListener('click', cambio, true);
//Modo oscuro
const switchButton = document.getElementById('switch');
const nav = document.querySelector("header");
switchButton.addEventListener('click', () => {
document.body.classList.toggle('dark');
switchButton.classList.toggle('active');
nav.classList.toggle('dark');
});