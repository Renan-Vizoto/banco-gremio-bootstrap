let formataCep = document.getElementById('validationCustom10')
formataCep.addEventListener("input", function () {
  formatarCEP(formataCep)
});

const form = document.getElementById('formulario2')

const rua = document.getElementById('validationCustom13')
const bairro = document.getElementById('validationCustom14')

//Chama CEP
const cep = document.getElementById('validationCustom10')
cep.addEventListener('blur', chamaAPI);

let asd = 0;

async function chamaAPI() {
  const novoCep = document.querySelector('#validationCustom10').value

  const apiViaCep = 'https://viacep.com.br/ws/' + novoCep + '/json/'

  respCep = await fetch(apiViaCep)
  const data = await respCep.json()

  //Não deixar enviar se estiver errado
  if (data.erro == true) {
    cep.classList.add('is-invalid')
    asd = 1;
  } else {
    cep.classList.remove('is-invalid')
    asd = 0;
    document.getElementById('validationCustom11').value = `${data.uf}`
    document.getElementById('validationCustom12').value = `${data.localidade}`
    document.getElementById('validationCustom13').value = `${data.logradouro}`
    document.getElementById('validationCustom14').value = `${data.bairro}`
  }

  if (data.logradouro == "") {
    rua.readOnly = false
    bairro.readOnly = false

    rua.style.backgroundColor = 'var(--bs-body-bg)'
    bairro.style.backgroundColor = 'var(--bs-body-bg)'
  }
  else {
    rua.readOnly = true
    bairro.readOnly = true

    rua.style.backgroundColor = 'rgb(241, 241, 241)'
    bairro.style.backgroundColor = 'rgb(241, 241, 241)'
  }
};

form.addEventListener('submit', (event) => {
  if (asd === 1) {
    event.preventDefault();
    cep.classList.add('is-invalid');
    form.classList.remove('was-validated');
  }
});

//Formatar Cep
function formatarCEP(cep) {
  let valor = cep.value.replace(/\D/g, '');
  let novoCep = '';

  if (valor.length > 0) {
    novoCep += '' + valor.substring(0, 5);
  }

  if (valor.length > 5) {
    novoCep += '-' + valor.substring(5, 8)
  }

  cep.value = novoCep
};

