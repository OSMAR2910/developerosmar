function isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}window.onload=function(){var e=document.getElementById("loader");e.style.visibility="hidden",e.style.opacity="0"};const abrirmodal=document.querySelector("#button_cv_abrir"),cerrarmodal=document.querySelector("#button_cv_cerrar"),modal=document.querySelector("#modal");abrirmodal.addEventListener("click",()=>{modal.showModal()}),cerrarmodal.addEventListener("click",()=>{modal.close()}),window.addEventListener("scroll",function(){let e=document.getElementById("pro_cont"),t;e.getBoundingClientRect().top<window.innerHeight/1&&(e.style.animation="lef 3s ease-out")}),window.addEventListener("scroll",function(){let e=document.getElementById("len_cont"),t;e.getBoundingClientRect().top<window.innerHeight/1&&(e.style.animation="rif 3s ease-out")}),window.addEventListener("scroll",function(){let e=document.getElementById("tec_an1"),t;e.getBoundingClientRect().top<window.innerHeight/1&&(e.style.animation="lef 3s ease-out")}),window.addEventListener("scroll",function(){let e=document.getElementById("tec_an2"),t;e.getBoundingClientRect().top<window.innerHeight/1&&(e.style.animation="rif 3s ease-out")}),window.addEventListener("scroll",function(){let e=document.getElementById("con_cont"),t;e.getBoundingClientRect().top<window.innerHeight/1&&(e.style.animation="lef 3s ease-out")}),window.addEventListener("scroll",function(){var e=document.querySelector("header"),t=document.querySelector("#navbarNav");e.classList.toggle("abajo",window.scrollY>0),t.classList.toggle("abajo",window.scrollY>0)});const isTouch=isTouchDevice();if(!isTouch){let e=document.querySelector(".js-cursor"),t="is-clicked",n="is-hidden",o="is-link-hovered",s=()=>{document.addEventListener("mousemove",i),document.addEventListener("mousedown",a),document.addEventListener("mouseup",r),document.addEventListener("mouseenter",c),document.addEventListener("mouseleave",l),d()},i=t=>{e.style.setProperty("--cursor-x",t.clientX+"px"),e.style.setProperty("--cursor-y",t.clientY+"px")},a=()=>{e.classList.add(t)},r=()=>{e.classList.remove(t)},c=()=>{e.classList.remove(n)},l=()=>{e.classList.add(n)},d=()=>{document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach(t=>{t.addEventListener("mouseover",()=>e.classList.add(o)),t.addEventListener("mouseout",()=>e.classList.remove(o))})};s(),document.body.classList.add("has-custom-cursor")}var box=document.getElementById("in"),header=document.getElementById("header"),contador=0;function cambio(){0==contador?(box.classList.add("fullscreen"),header.classList.add("fullscreen"),contador=1):(box.classList.remove("fullscreen"),header.classList.remove("fullscreen"),contador=0)}btn1.addEventListener("click",cambio,!0),btn2.addEventListener("click",cambio,!0),btn3.addEventListener("click",cambio,!0),btn4.addEventListener("click",cambio,!0),btn5.addEventListener("click",cambio,!0),btn6.addEventListener("click",cambio,!0);
