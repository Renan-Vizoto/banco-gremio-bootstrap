const form = document.getElementById('formulario')

//////////////////////////////////////////////////////////////////  CPF
//Mascara CPF
let formataCPF = document.getElementById('validationCustom03')
formataCPF.addEventListener('input', function () {
  formatarCPF(formataCPF)
});
//Formatar CPF
function formatarCPF(cpf) {
  let valor = cpf.value.replace(/\D/g, '');
  let novoCPF = '';

  if (valor.length > 0) {
    novoCPF += '' + valor.substring(0, 3);
  }
  if (valor.length > 3) {
    novoCPF += '.' + valor.substring(3, 6);
  }
  if (valor.length > 6) {
    novoCPF += '.' + valor.substring(6, 9);
  }
  if (valor.length > 9) {
    novoCPF += '-' + valor.substring(9, 11)
  }

  cpf.value = novoCPF
};


//////////////////////////////////////////////////////////////////  nome
const inputNome = document.getElementById("validationCustom01");

inputNome.addEventListener("keypress", function (novoNome) {
  let chave = novoNome.key;

  if (/[^a-zA-Z]/.test(chave)) {
    novoNome.preventDefault();
  }
});

//sobrenome
const inputSobrenome = document.getElementById("validationCustom02");

inputSobrenome.addEventListener("keypress", function (novoSobrenome) {
  let key = novoSobrenome.key;

  if (/[^a-zA-Z\s]/.test(key)) {
    novoSobrenome.preventDefault();
  }
});



//////////////////////////////////////////////////////////////////  CELULAR
let formataCel = document.getElementById('validationCustom08')
formataCel.addEventListener('input', formatarCel)

function formatarCel() {
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


//////////////////////////////////////////////////////////////////  data
const inputDate = document.getElementById('validationCustom04');
const minDate = new Date('1900-01-01');
const maxDate = new Date();

inputDate.addEventListener('input', function () {
  const selectedDate = new Date(inputDate.value);

  if (selectedDate < minDate || selectedDate > maxDate) {
    inputDate.setCustomValidity('Data inválida');
  } else {
    inputDate.setCustomValidity('');
  }
});

//////////////////////////////////////////////////////////////////  Senha
const senhav = document.getElementById('validationCustom06')
const confirmaSenhav = document.getElementById('validationCustom07')

form.addEventListener('submit', function (event) {
  if (confirmaSenhav.value !== senhav.value) {
    event.preventDefault();
    confirmaSenhav.classList.add('is-invalid');
    form.classList.remove('was-validated')
  }
});

confirmaSenhav.addEventListener('blur', function () {
  if (confirmaSenhav.value !== senhav.value) {
    confirmaSenhav.classList.add('is-invalid');
  }
  else {
    confirmaSenhav.classList.remove('is-invalid');
  }

})


//////////////////////////////////////////////////////////////////  menor que 18
const calculaDataNasc = document.getElementById('validationCustom04');
calculaDataNasc.addEventListener('blur', calculaIdade);
let dataAtual = new Date();

function calculaIdade() {
  let dataNasc = new Date(calculaDataNasc.value);
  const idadeMilissegundos = dataAtual - dataNasc;
  const idadeAnos = Math.floor(idadeMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

  if (idadeAnos < 18) {
    calculaDataNasc.classList.add('is-invalid')
  }
  else {
    calculaDataNasc.classList.remove('is-invalid')
  }

  console.log(idadeAnos)
}

form.document.addEventListener('submit', function (event) {
  let dataNasc = new Date(calculaDataNasc.value);
  const idadeMilissegundos = dataAtual - dataNasc;
  const idadeAnos = Math.floor(idadeMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

  if (idadeAnos.valueOf < 18) {
    event.preventDefault();
    calculaDataNasc.classList.add('is-invalid');
    form.classList.remove('was-validated');
    console.log('aa')
  }
});