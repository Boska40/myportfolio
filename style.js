// bouton remonter vers le haut
const btn = document.querySelector('.totop');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

// fonction ouverture/fermeture menu
const nav = document.querySelector(".navbar");
const icon = document.querySelector(".toggle_menu");
const new_navbar= document.querySelector(".active");

function openmenu(){
    nav.classList.toggle("active");
}