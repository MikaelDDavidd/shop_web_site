const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// Selecione o ícone de usuário e a mini janela
const userIcon = document.querySelector('.bx-user');
const userInfo = document.querySelector('.user-info');

// Evento para exibir a mini janela ao passar o mouse sobre o ícone de usuário
userIcon.addEventListener('mouseenter', function() {
  userInfo.style.display = 'block';
});

// Evento para ocultar a mini janela ao retirar o mouse do ícone de usuário
userIcon.addEventListener('mouseleave', function() {
  userInfo.style.display = 'none';
});
