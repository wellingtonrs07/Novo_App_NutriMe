document.addEventListener('DOMContentLoaded', function () {
    data = document.querySelectorAll('.data1');
    titulo = document.querySelectorAll('.titulo.fonte_titulo');
    titulo_salvo = localStorage.getItem('titulo fonte_titulo');
    titulo.textContent = titulo_salvo;
    
    data[0].addEventListener('click', function () {
        localStorage.setItem('titulo fonte_titulo', '1 de Outubro de 2023');
        titulo.textContent = '1 de Outubro de 2023';
    })
})