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
let mytogglebutton = document.querySelector('.menu_mobile');
let myhiddenthing = document.querySelector('.box_menu_mobile');
let mytogglebuttonclose = document.querySelector('.close_manu');
let myblackback = document.querySelector('.back_modal');

mytogglebutton.addEventListener('click',function() {
  showMenu()
  }
)
mytogglebuttonclose.addEventListener('click',function() {
  showMenu()
  }
)
myblackback.addEventListener('click',function() {
  showMenu()
  }
)
function showMenu(){
  myhiddenthing.classList.toggle('active');
  myblackback.classList.toggle('active');
}