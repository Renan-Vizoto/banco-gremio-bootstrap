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

  //repeticao letra
  if (inputNome.value[inputNome.value.length - 1] === inputNome.value[inputNome.value.length - 2]
    && chave === inputNome.value[inputNome.value.length - 1]) {
    novoNome.preventDefault();
  };
});

//sobrenome
const inputSobrenome = document.getElementById("validationCustom02");

inputSobrenome.addEventListener("keypress", function (novoSobrenome) {
  let key = novoSobrenome.key;

  if (/[^a-zA-Z\s]/.test(key)) {
    novoSobrenome.preventDefault();
  }

  if (/[\s]/.test(key) && inputNome.value[inputNome.value.length - 1] === " ") {
    novoNome.preventDefault();
  };

  //repeticao letra
  if (inputNome.value[inputNome.value.length - 1] === inputNome.value[inputNome.value.length - 2]
    && key === inputNome.value[inputNome.value.length - 1]) {
    novoNome.preventDefault();
  };
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

formataCel.addEventListener('blur', () => {
  if(formataCel.value.length < 15){
    formataCel.classList.add('is-invalid')
  }
  else{
    formataCel.classList.remove('is-invalid')
  }
});

form.addEventListener('submit', (event) => {
  if(formataCel.value.length < 15){
    event.preventDefault();
    formataCel.classList.add('is-invalid')
    form.classList.remove('was-validated');
  }
});

//////////////////////////////////////////////////////////////////  email
const email = document.getElementById('validationCustom05')
email.addEventListener('keypress', (event) => {
  emailTest = email.value
  if(/[\s]/.test(emailTest)){
    email.classList.add('is-invalid')
  }
  else{
    email.classList.remove('is-invalid')
  }
});


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
const senhaDiferente = document.getElementById('senha-diferente')

const regexLetraMaiuscula = /[A-Z]/;
const regexLetraMinuscula = /[a-z]/;
const regexNumero = /[0-9]/;
const regexCaracterEspecial = /[\W_]/;

senhav.addEventListener('blur', () => {
  const senha = senhav.value
  if(
    regexLetraMaiuscula.test(senha) &&
    regexLetraMinuscula.test(senha) &&
    regexNumero.test(senha) &&
    regexCaracterEspecial.test(senha)
  ){
    senhav.classList.remove('is-invalid');
  }
  else{
    senhav.classList.add('is-invalid');
  }
});

senhav.addEventListener('blur', function () {
  if (senhav.value.length < 8 || senhav.value.length > 20) {
    senhav.classList.add('is-invalid');
  }
  else{
    senhav.classList.remove('is-invalid');
  }
});

confirmaSenhav.addEventListener('blur', function () {
  if (confirmaSenhav.value !== senhav.value) {
    confirmaSenhav.classList.add('is-invalid')
    senhaDiferente.innerHTML = 'Senha Inválida.';
  }
  else {
    confirmaSenhav.classList.remove('is-invalid');
  }

})

form.addEventListener('submit', function (event) {
  const senha = senhav.value
  if(
    regexLetraMaiuscula.test(senha) &&
    regexLetraMinuscula.test(senha) &&
    regexNumero.test(senha) &&
    regexCaracterEspecial.test(senha)
  ){
    console.log("passou")
  }
  else{
    event.preventDefault();
    senhav.classList.add('is-invalid');
    form.classList.remove('was-validated');
  }
});

form.addEventListener('submit', function (event) {
  if (confirmaSenhav.value !== senhav.value || senhav.value.length < 8 || senhav.value.length > 20) {
    event.preventDefault();
    confirmaSenhav.classList.add('is-invalid');
    form.classList.remove('was-validated')
  }
});


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

form.addEventListener('submit', function (event) {
  let dataNasc = new Date(calculaDataNasc.value);
  const idadeMilissegundos = dataAtual - dataNasc;
  const idadeAnos = Math.floor(idadeMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

  if (idadeAnos < 18) {
    event.preventDefault();
    calculaDataNasc.classList.add('is-invalid');
    form.classList.remove('was-validated');
    console.log('aa');
  }
  else {
    calculaDataNasc.classList.remove('is-invalid');
  }
});