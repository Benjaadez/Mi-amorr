const mensajes = [
"Desde que llegaste, mis días tienen más color. 🌈",
"Sos la casualidad más linda que me pasó. ✨",
"Tenerte en mi vida es mi mayor suerte. 🍀",
"Tu sonrisa mejora cualquier día malo. 😊",
"Sos mi pensamiento favorito. ❤️",
"Con vos todo se siente más lindo. 🌸",
"Sos mi lugar favorito 🏡",
"Cada día me gustás más 😍",
"Tu amor se siente como hogar 🏠",
"Sos mi alegría favorita 😃"
];

const fotos = [
"foto_1.jpeg","foto_2.jpeg","foto_3.jpeg","foto_4.jpeg",
"foto_5.jpeg","foto_6.jpeg","foto_7.jpeg","foto_8.jpeg",
"foto_9.jpeg","foto_10.jpeg","foto_11.jpeg","foto_12.jpeg",
"foto_13.jpeg","foto_14.jpeg"
];

let inicio = new Date("2025-06-20");
let mostrar = false;

/* CAJA INICIO */
function abrirPagina(){
document.getElementById("inicio").style.display = "none";
}

/* MENSAJES */
function nuevoMensaje(){
let r = Math.floor(Math.random()*mensajes.length);
document.getElementById("mensaje").innerText = mensajes[r];
}

/* CONTADOR */
function cambiarContador(){
mostrar = !mostrar;
actualizar();
}

function actualizar(){
let hoy = new Date();

if(!mostrar){
let dias = Math.floor((hoy - inicio)/(1000*60*60*24));
document.getElementById("contador").innerText =
"❤️ " + dias + " días juntos ❤️";
}else{
let fin = new Date("2026-06-20");
let d = Math.floor((fin - hoy)/(1000*60*60*24));
let h = Math.floor(((fin - hoy)/(1000*60*60))%24);
let m = Math.floor(((fin - hoy)/(1000*60))%60);
let s = Math.floor((fin - hoy)/1000%60);

document.getElementById("contador").innerText =
"🎉 " + d + "d " + h + "h " + m + "m " + s + "s ❤️";
}
}

setInterval(actualizar,1000);
actualizar();

/* FOTOS */
function mostrarFoto(){
let i = Math.floor(Math.random()*fotos.length);
document.getElementById("foto-random").src = fotos[i];
document.getElementById("foto-box").style.display = "block";
}

/* CORAZONES */
function crearCorazon(){
let c = document.createElement("div");
c.innerHTML = "❤️";
c.style.position = "absolute";
c.style.left = Math.random()*100+"vw";
c.style.top = "-50px";
c.style.fontSize = (Math.random()*20+15)+"px";
c.style.animation = "caer 6s linear";
document.body.appendChild(c);

setTimeout(()=>c.remove(),6000);
}

setInterval(crearCorazon,400);