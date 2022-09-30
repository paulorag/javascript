function verificar() {
    var txtP = document.querySelector('input#txtPais');
    var pais = txtP.value;
    var res = document.querySelector('div#res');

    if (pais != 'Brasil') {
        res.innerHTML = 'Estrangeiro';
    } else {
        res.innerHTML = 'Brasileiro';
    }
}