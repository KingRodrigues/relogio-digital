/* Pega os IDs do HTML */
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/* Cria um intervalo a cada 1000 milissegundos */
const relogio = setInterval(function time() {
    let dateToday = new Date(); /* dateToday == "Momento Atual" */
    let hor = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    /* Vai adicionar um zero a esquerda se for menor que dez */
    if (hor < 10) hor = '0' + hor;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;
    
    /* Atualiza os textos do HTML com as horas */
    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000);