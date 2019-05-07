$(document).ready(function(){
		$("#cpf").mask("999.999.999-99");
  $("#salvar").click(function (e) {
    var erros = [];
    if ($('#nome').val() == "") {
      erros.push("O campo nome é obrigatório.");
    }

    if ($('#cpf').val() == "") {
      erros.push("O campo cpf é obrigatório.");
    }
    
    if ($('#uf option:selected').text() == "") {
      erros.push("O campo estado é obrigatório.");
    }

    var mensagem = "";
    erros.forEach(function(value) {
      console.log(value);
      mensagem = mensagem +'\n'+ value;
    });

    console.log(mensagem);
    console.log(erros);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: mensagem,
    })

    return false;

  });
 
});