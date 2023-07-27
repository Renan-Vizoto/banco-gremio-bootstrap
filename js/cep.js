let formataCep = document.getElementById('validationCustom10')
formataCep.addEventListener("input", function () {
  formatarCEP(formataCep)
});

//Chama CEP
document.getElementById('validationCustom10').addEventListener('blur', chamaAPI);

async function chamaAPI() {
  let novoCep = document.querySelector('#validationCustom10').value

  const apiViaCep = 'https://viacep.com.br/ws/' + novoCep + '/json/'

  respCep = await fetch(apiViaCep)
  const data = await respCep.json()

  //Não deixar enviar se estiver errado
  document.getElementById('validationCustom11').value = `${data.uf}`
  document.getElementById('validationCustom12').value = `${data.localidade}`
  document.getElementById('validationCustom13').value = `${data.logradouro}`
  document.getElementById('validationCustom14').value = `${data.bairro}`
}

//Formatar Cep
function formatarCEP(cep){
  let valor = cep.value.replace(/\D/g, '');
  let novoCep = '';

  if(valor.length > 0){
    novoCep += '' + valor.substring(0, 5);
  }

  if(valor.length > 5){
    novoCep += '-' + valor.substring(5, 8)
  }

  cep.value = novoCep
};  