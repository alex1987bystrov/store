let nav = document.querySelector('.nav__panel');
let burger = document.querySelector('.burger');
function handleClick(e){
    burger.classList.toggle('active');
    nav.classList.toggle('show');
}
burger.addEventListener('click', handleClick);