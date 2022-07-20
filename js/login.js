// inicializa o jQuery
$(document).ready(function(){
    // masks
    // $("#cpf").mask("000.000.000-00");

    // funções 
    // validação do formulário
    // $("#tipoLogin").change(function () {
    //     let tipoLogin = $("#tipoLogin").val();
         
    //     // cpf
    //      if( tipoLogin == '' ){
    //         //desabilitar o campo
    //         $("#cpf").attr("disabled", "true")
    //         //zerar o valor dele
    //         $("#cpf").val("")

    //     } else if (tipoLogin == '1') {
    //         $("#cpf").attr("disabled", "false")
    //         $("#cpf").unmask();
    //     } else {
    //         $("#cpf").mask("000.000.000-00");
    //         $("#cpf").attr("disabled", "false")
    //     }
        
    // })




    $(".signin").click(function(){
        
        // //pegar os dados dos campos
        
        let nome = $("#nome").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos");
        } else {
            $(".mensagem").text("Dados prontos para cadastrar!!");
        }
    });
});