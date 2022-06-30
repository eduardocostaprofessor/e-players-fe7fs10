// inicializa o jQuery
$(document).ready(function(){
    // masks
    $("#cpf").mask("000.000.000-00");

    // funções 
    // validação do formulário
    $(".signin").click(function(){
        
        // //pegar os dados dos campos
        let cpf = $("#cpf").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos");
        } else {
            $(".mensagem").text("Dados prontos para cadastrar!!");
        }
    });
});