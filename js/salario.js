document.getElementById('validationCustom16').addEventListener('input', calcCredito);

function calcCredito() {
  let valor = document.getElementById('validationCustom16').value * 0.4;

  let credito = valor.toFixed(2).replace('.', ',');

  document.getElementById('validationCustom17').value = `R$ ${credito}`
}