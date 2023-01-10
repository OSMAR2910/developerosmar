//Animaciones
window.addEventListener('scroll', function(){
    let animacion = document.getElementById("len_cont");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/1;

    if (posicionObj1 < tamañoDePantalla){
        animacion.style.animation = "rif 2.5s ease-out"
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById("tec_an1");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/1;

    if (posicionObj1 < tamañoDePantalla){
        animacion.style.animation = "lef 2.5s ease-out"
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById("tec_an2");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/1;

    if (posicionObj1 < tamañoDePantalla){
        animacion.style.animation = "rif 2.5s ease-out"
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById("con_cont");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/1;

    if (posicionObj1 < tamañoDePantalla){
        animacion.style.animation = "lef 2.5s ease-out"
    }
})
//Cursor
function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}
const isTouch = isTouchDevice();
if (!isTouch){

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
			el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass) );
			el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass) );
		});
	};

	addEventListeners();
	document.body.classList.add(hasCustomCursorClass);

	// DEBUG
	var debugButton = document.querySelector('.js-debug-button');
	debugButton.onclick = function() {
		debugButton.classList.toggle('is-active');
		document.body.classList.toggle('is-debug');
	}

}