// AMIMATE SLIDER - left
document.getElementById('arrowleft').addEventListener('click', function () {
  let movement = document.querySelector('.item_slider').offsetWidth
  document.getElementById('animte_slider').scrollLeft += movement;
});
// AMIMATE SLIDER - right
document.getElementById('arrowright').addEventListener('click', function () {
  let movement = document.querySelector('.item_slider').offsetWidth
  document.getElementById('animte_slider').scrollLeft -= movement;
});