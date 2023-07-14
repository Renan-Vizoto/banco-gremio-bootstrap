// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




//Mascara CEP
let formataCep = document.getElementById('validationCustom10')
formataCep.addEventListener("input", function () {
  formatarCEP(formataCep)
});
//////////////////////////////////////////  FUNCOES  ///////////////////////////////////////////
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