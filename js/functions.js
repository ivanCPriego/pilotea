// AMIMATE SLIDER - left
document.getElementById('arrowleft').addEventListener('click', function () {
  //calcular el tamaño de un elmento
  let move = document.querySelector('.item_slider').offsetWidth
  //desplazar el scroll horizontal respecto a tamaño del elemento  
  document.getElementById('animte_slider').scrollLeft -= move;
});
// AMIMATE SLIDER - right
document.getElementById('arrowright').addEventListener('click', function () {
  //calcular el tamaño de un elmento
  let move = document.querySelector('.item_slider').offsetWidth
  //desplazar el scroll horizontal respecto a tamaño del elemento 
  document.getElementById('animte_slider').scrollLeft += move;
});

//MENU ANIMATE
//tomando elementos por medio del query selector
const mytogglebutton = document.querySelector('.menu_mobile');
const myhiddenthing = document.querySelector('.box_menu_mobile');
const mytogglebuttonclose = document.querySelector('.close_manu');
const myblackback = document.querySelector('.back_modal');

//funciones que mandan a llamar a la funcion que agregan la clase activ al menu y al fondo
mytogglebutton.addEventListener('click',()=>showMenu())
mytogglebuttonclose.addEventListener('click',()=>showMenu())
myblackback.addEventListener('click',()=>showMenu())

//funcion que agrega la clase activ al menu y al fondo
const showMenu = ()=>{
  myhiddenthing.classList.toggle('active');
  myblackback.classList.toggle('active');
}