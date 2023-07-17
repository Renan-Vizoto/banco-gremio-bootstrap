

const strCPF = document.getElementById('validationCustom03')
strCPF.addEventListener('blur', function () {
  validarCPF(strCPF)
});
let validade = 1;


function validarCPF(cpf) {
  cpf = cpf.value.replace(/\.|-/g, '');
  if (cpf == '') return false;
  // Elimina CPFs invalidos conhecidos	
  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999") {
    alert('CPF Inválido')
    validade = 0;
    strCPF.classList.add('is-invalid')
    return;
  }
  // Valida 1o digito	
  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9))) {
    alert('CPF Inválido')
    strCPF.classList.add('is-invalid')
    validade = 0;
    return;
  }
  // Valida 2o digito	
  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10))) {
    alert('CPF Inválido')
    strCPF.classList.add('is-invalid')
    validade = 0;
    return;
  }
  else {
    strCPF.classList.remove('is-invalid')
    validade = 1;
    return;
  }

};

form.addEventListener('submit', function (event) {

  if (validade == 0) {
    event.preventDefault();
    strCPF.classList.add('is-invalid');
  }
  else{
    strCPF.classList.remove('is-invalid');
  }
});