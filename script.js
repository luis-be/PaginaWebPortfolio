const nav = document.querySelector('.header-nav-list')
const listItem = document.querySelectorAll('.list-item')
const iconFarBars = document.querySelector('.fa-bars')
const iconFaSolid = document.querySelector('.fa-solid')

iconFarBars.addEventListener('click', () => {
    nav.style.right = '0';
    nav.style.transition = '0.6s'
})

iconFaSolid.addEventListener('click', () => {
    nav.style.right = '-16rem';
})

listItem.forEach((item) => {
    item.addEventListener('click', () => {
        nav.style.right = '-16rem';
    })
})