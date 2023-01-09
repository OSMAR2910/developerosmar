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