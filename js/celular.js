let formataCel = document.getElementById('validationCustom08')
formataCel.addEventListener('input', formatarCel)

function formatarCel(){
    let valor = formataCel.value.replace(/\D/g, '');
    let novoTelefone = '';

    if (valor.length > 0) {
        novoTelefone += '(' + valor.substring(0, 2);
    }

    if (valor.length > 2) {
        novoTelefone += ') ' + valor.substring(2, 7);
    }

    if (valor.length > 7) {
        novoTelefone += '-' + valor.substring(7, 11);
    }

    formataCel.value = novoTelefone;
}