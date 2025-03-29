let openBurgerMenu = document.getElementById('open-modal');
openBurgerMenu.addEventListener('click', openModal);

function openModal() {
    console.log('Я работаю');
    let modal = document.getElementsByClassName('burger_menu_wrapper')[0];
    modal.classList.toggle('active');
}