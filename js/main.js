const buttons = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');


const openContent = (e) => {
    const target = e.currentTarget;
    const button = target.dataset.button;

    buttons.forEach((item) => {
        item.classList.remove('tabs__btn-item--active')
    });

    tabsContent.forEach((item) => {
        item.classList.remove('tabs__content-item--active')
    });

    target.classList.add('tabs__btn-item--active')
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

buttons.forEach((item) => {
    item.addEventListener('click', openContent);
});


//menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
})