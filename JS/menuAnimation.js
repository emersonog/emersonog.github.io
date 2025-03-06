let navBar = document.querySelector('#header')

document.addEventListener('scroll', () => {
  let scrollTop = window.scrollY
  if (scrollTop > 1) {
    navBar.classList.add('rolar')
  } else {
    navBar.classList.remove('rolar')
  }
})
let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')
let opcaoMobile = document.querySelector('#opcao-mobile')

let body = document.querySelector('body')

btnMenuMob.addEventListener("click", () => {
  line1.classList.toggle('ativo1')
  line2.classList.toggle('ativo2')
  menuMobile.classList.toggle('abrir')

  body.classList.toggle('no-overflow')
});
opcaoMobile.addEventListener("click", () => {
  line1.classList.toggle('ativo1')
  line2.classList.toggle('ativo2')
  menuMobile.classList.toggle('abrir')
});

