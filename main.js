function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep +"/json";
    console.log(url);
     $.ajax({
         url: url ,
         type: "GET",
         success: function(response){
            console.log(response);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $("#ddd").html(response.ddd);
            $("#ibge").html(response.ibge);
            $(".cep").show();
            $(".barra-progresso").hide();
         }
     })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
}); 
