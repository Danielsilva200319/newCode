const menu = document.querySelector('.nav_menu');
const listaMenu = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_link');
menu.addEventListener('click', function(){
    listaMenu.classList.toggle('nav_list--show');
});
links.forEach(function(link){
    link.addEventListener('click', function(){
        listaMenu.classList.remove('nav_list--show');
    })
});