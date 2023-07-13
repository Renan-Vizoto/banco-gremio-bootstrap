//////////////////////////////////////////////////////////////////  CPF
//Mascara CPF
let formataCPF = document.getElementById('validationCustom03')
formataCPF.addEventListener('input', function(){
  formatarCPF(formataCPF)
});
//Formatar CPF
function formatarCPF(cpf){
    let valor = cpf.value.replace(/\D/g, '');
    let novoCPF = '';
  
    if(valor.length > 0){
      novoCPF += '' + valor.substring(0, 3);
    }
    if(valor.length > 3){
      novoCPF += '.' + valor.substring(3, 6);
    }
    if(valor.length > 6){
      novoCPF += '.' + valor.substring(6, 9);
    }
    if(valor.length > 9){
      novoCPF += '-' + valor.substring(9, 11)
    }
  
    cpf.value = novoCPF
  };


//////////////////////////////////////////////////////////////////  Celular
