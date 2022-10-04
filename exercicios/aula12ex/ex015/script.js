function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anoUsuario = document.getElementById('txtAno');
    var res = document.querySelector('div#res');

    if (anoUsuario.value.length == 0 || Number(anoUsuario.value) > ano) {
        alert('Verifique os dados e tente novamente');
    } else {
        var fSex = document.getElementsByName('radSex');
        var idade = ano - Number(anoUsuario.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menino.png');
            } else if (idade < 21) {
                img.setAttribute('src', './img/garoto.png');
            } else if (idade < 50) {
                img.setAttribute('src', './img/homem.png');
            } else {
                img.setAttribute('src', './img/idoso.png');
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menina.png');
            } else if (idade < 21) {
                img.setAttribute('src', './img/garota.png');
            } else if (idade < 50) {
                img.setAttribute('src', './img/mulher.png');
            } else {
                img.setAttribute('src', './img/idosa.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}