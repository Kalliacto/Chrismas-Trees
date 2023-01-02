const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_activ');
    navigation.classList.toggle('navigation_active');
});