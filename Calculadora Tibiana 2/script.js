document.getElementById("botao").addEventListener("click", function () {
    let MaiorleveldaPT = parseInt(document.getElementById("Level").value);
    if (isNaN(MaiorleveldaPT))
        document.getElementById('resultado').innerHTML = 'O valor digitado não é valido.'
    else {
        let resultado = Math.round(MaiorleveldaPT * 2 / 3)
        document.getElementById('resultado').innerHTML = 'O menor level da party possível é: ' + resultado
    }
})