$(document).ready(function() {
    $('#fone').mask("(00) 00000-0000");
    $('#cpf').mask(`000.000.000-00`, {reverse: true});
    $('#cep').mask(`00000-000`);

    $("form").on("submit", function(e) {
        e.preventDefault();

        const resultado = $("#resultado");
        const dados = [$("#nome").val(), $("#email").val(), $("#fone").val(), $("#cpf").val(), $("#endereco").val(), $("#cep").val()];
       
        resultado.append("<h2>Resultado:</h2>")
        for (let i = 0; i < dados.length; i++) {
            console.log(i);
            resultado.append("<li>" + dados[i] + "</li>");
        }
    });
})