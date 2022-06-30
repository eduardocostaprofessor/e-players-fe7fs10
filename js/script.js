// uso do jQuery
$(document).ready(function () {
    // todas as suas funções jQuery

    $(".btn-buy").click(function(){
        alert("Este produto não está disponível");
    });

    // $(".menu-bars").click(function(){
    //     $(".menu").toggleClass('mostraEscondeMenu')    
    // });
    
});


function abreFechaMenu() {
    // navbar -tag nav
    let navbar = document.querySelector(".menu");
    navbar.classList.toggle("mostraEscondeMenu");
    // console.log(navbar);
}


