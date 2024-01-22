function calcularMedia(){
    var notaMatematica = document.getElementById('notaDeMatematica').value;
    var notaLinguagens = document.getElementById('notaDeLinguagens').value;
    var notaCienciasNatureza = document.getElementById('notaDeCienciasNatureza').value;
    var notaCienciasHumanas = document.getElementById('notaDeCienciasHumanas').value;
    var notaRedacao = document.getElementById('notaDeRedacao').value;

    notaMatematica = parseFloat(notaMatematica);
    notaLinguagens = parseFloat(notaLinguagens);
    notaCienciasNatureza = parseFloat(notaCienciasNatureza);
    notaCienciasHumanas = parseFloat(notaCienciasHumanas);
    notaRedacao = parseFloat(notaRedacao);

    var media = (notaMatematica + notaLinguagens + notaCienciasNatureza + notaCienciasHumanas + notaRedacao) / 5;

    document.getElementById('result').innerText = 'Sua Nota Final é: ' + media + '\uD83C\uDF89';
}
