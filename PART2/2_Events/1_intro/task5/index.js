const btn = document.getElementById('btn')
const menu = document.querySelector('.menu')

btn.addEventListener('click', () => {
    menu.classList.toggle('open')
})