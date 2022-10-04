function contar() {
    let ini = document.querySelector('input#numIni');
    let fim = document.querySelector('input#numFim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('div#res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar';
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            alert('Passo invalido! Considerando passo 1');
            p = 1;
        }

        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449}`;
            }
        } else {
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

}