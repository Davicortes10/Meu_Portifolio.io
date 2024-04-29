let btnMenu = document.querySelector('#btn-menu')
let menu = document.querySelector('#menu-mobile')
let overlay = document.querySelector('#overlay')

btnMenu.addEventListener('click',  ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',  ()=> {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',  ()=> {
    menu.classList.remove('abrir-menu')
})

