function calcularMedia(){
    var aviso = document.getElementById("aviso")
    var resultado = document.getElementById("resultado")
    var aprovacao = document.getElementById("aprovacao")
    var reprovacao = document.getElementById("reprovacao")
    
    var primeiraNota = parseFloat(document.getElementById("nota1").value);
    var segundaNota = parseFloat(document.getElementById("nota2").value);
    var terceiraNota = parseFloat(document.getElementById("nota3").value);
    var quartaNota = parseFloat(document.getElementById("nota4").value);
    
    if (primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 || quartaNota > 10)
        {aviso.innerHTML = " <span class='highlight'> A nota máxima de <br> cada prova é 10! </span>"
        aprovacao.innerHTML = ""
        reprovacao.innerHTML = ""
        resultado.innerHTML = "" }
    else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0)
        {aviso.innerHTML = " <span class='highlight'> A nota de cada prova <br> não pode ser menor do que 0!   </span>"
        aprovacao.innerHTML = ""
        reprovacao.innerHTML = ""
        resultado.innerHTML = "" }
    else {
        if (isNaN(primeiraNota)) {primeiraNota = 0}
        if (isNaN(segundaNota)) {segundaNota = 0}
        if (isNaN(terceiraNota)) {terceiraNota = 0}
        if (isNaN(quartaNota)) {quartaNota = 0}
      
        var media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4;
  
        resultado.innerHTML = (" <span class='highlight'> Sua média é: " + media.toFixed(1) + " </span>")
  
        if (media > 5.9){ aprovacao.innerHTML = "<span class='aribbon-highlight'> APROVADO </span>"
                reprovacao.innerHTML = ""
                aviso.innerHTML = "" }
        else { reprovacao.innerHTML = "<span class='rribbon-highlight'>" + "REPROVADO" + "</span>" 
                aprovacao.innerHTML = "" 
                aviso.innerHTML = ""}
          }
  }