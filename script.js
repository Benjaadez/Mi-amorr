const mensajes = [
"Desde que llegaste, mis días tienen más color. 🌈",
"Sos la casualidad más linda que me pasó. ✨",
"Tenerte en mi vida es mi mayor suerte. 🍀",
"Tu sonrisa mejora cualquier día malo. 😊",
"No sabía lo que era extrañar hasta conocerte. 💭",
"Sos mi pensamiento favorito. ❤️",
"Si pudiera elegir otra vez, te elegiría siempre. 💘",
"Con vos todo se siente más lindo. 🌸",
"Gracias por existir y cruzarte en mi camino. 🙏",
"Sos paz en medio de mi caos. 🕊️",
"Me encanta cómo haces especial lo simple. 🌟",
"Tu voz tiene algo que calma mi alma. 🎶",
"Cada momento con vos vale oro. 🥇",
"Sos lo más bonito de mis días. 🌷",
"Quiero seguir sumando recuerdos con vos. 📸",
"A tu lado hasta lo normal se vuelve mágico. ✨",
"No necesito nada más cuando estoy con vos. 🤍",
"Sos mi lugar favorito. 🏡",
"Verte feliz me hace feliz. 😄",
"Ojalá nunca te falten razones para sonreír. 🌞",
"Sos hermosa por fuera y enorme por dentro. 💖",
"Cada día me gustás más. 😍",
"Sos esa persona que uno agradece haber conocido. 🙌",
"Con vos aprendí lo lindo del amor. 💕",
"Mi corazón sonríe cuando te piensa. 😊",
"Sos la mejor parte de mis días. ☀️",
"Me hacés bien sin darte cuenta. 💫",
"Tu amor se siente como hogar. 🏠",
"Gracias por cada detalle tuyo. 🎁",
"No hay nadie como vos. 🌹",
"Tenés una luz que ilumina todo. ✨",
"Sos mi coincidencia favorita. 🍃",
"Si estoy con vos, estoy bien. 🤗",
"Me encanta la persona que sos. 💞",
"Cada charla con vos vale la pena. 🗨️",
"Sos un regalo en mi vida. 🎀",
"Qué lindo es compartir tiempo con vos. ⏳",
"Sos la calma que no sabía que necesitaba. 🌙",
"Me enamora tu forma de ser. 😍",
"Todo es mejor desde que estás vos. 🌈",
"Tu risa debería ser eterna. 😂",
"Sos mi debilidad más linda. 💓",
"Nunca me canso de hablar con vos. 📱",
"Te pienso más de lo que imaginas. 💭",
"Ojalá verte hoy y todos los días. 🌅",
"Gracias por bancarme siempre. 🤝",
"Me haces sentir afortunado. 🍀",
"Sos la historia que quiero seguir escribiendo. 📖",
"Tu cariño vale muchísimo. 💝",
"Sos mi alegría favorita. 😃"
];

function nuevoMensaje(){
let random = Math.floor(Math.random() * mensajes.length);
document.getElementById("mensaje").innerText = mensajes[random];
}

const fotos = [
"foto_1.jpeg","foto_2.jpeg","foto_3.jpeg","foto_4.jpeg",
"foto_5.jpeg","foto_6.jpeg","foto_7.jpeg","foto_8.jpeg",
"foto_9.jpeg","foto_10.jpeg","foto_11.jpeg","foto_12.jpeg",
"foto_13.jpeg","foto_14.jpeg"
];

let inicio = new Date("2025-06-20");
let mostrar = false;

/* INICIO */
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
document.getElementById("contador").innerText = "❤️ " + dias + " días juntos ❤️";
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
c.classList.add("corazon");
c.innerHTML = "❤️";

c.style.left = Math.random()*100 + "vw";
c.style.fontSize = (Math.random()*15+10) + "px";
c.style.animationDuration = (Math.random()*3+3) + "s";

document.body.appendChild(c);

setTimeout(()=>c.remove(),6000);
}

setInterval(crearCorazon,200);
