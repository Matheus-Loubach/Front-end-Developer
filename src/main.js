
function form(elemento) {

  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';


  textoArray.forEach((letra, i) => {

    setTimeout(() => elemento.innerHTML += letra, 75 * i);
    
  });
}

const titulo2 = document.querySelector('h1');

form(titulo2)



/*Efeito no texto*/
window.sr = ScrollReveal({reset: true});

sr.reveal('.fundo_relogio',{
  rotate: {x: 360, y: 0, z:0},
  duration: 2000,
});
sr.reveal('.par-1', {
  rotate: {x: -100, y: 0, z:0},
  duration: 2000,
});

sr.reveal('.paragrafo_sobre', {
  rotate: {x: 0, y: 80, z:0},
  duration: 2000,
});