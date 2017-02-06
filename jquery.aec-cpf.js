/*
    AmorEmCristo jQuery CPF Plugin 1.0
    Checa se o CPF inserido é válido

    Dependências:
    - jQuery >=2 (https://code.jquery.com/jquery-3.1.1.slim.min.js);
    - jQuery Mask Plugin >=1.14 (https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.9/jquery.mask.min.js);
    - Setar variável "invalidText" com texto no caso de valor inválido;
    - Adicionar classes "aec-cpf-field", "aec-cpf-btn" e "aec-cpf-form" nos elementos HTML correspondentes.
*/

var aecCpfField = $('.aec-cpf-field'),
    aecCpfBtn   = $('.aec-cpf-btn'),
    aecCpfForm  = $('.aec-cpf-form');

if (typeof invalidText === 'undefined' ||
    aecCpfField.length < 1 ||
    aecCpfBtn.length < 1 ||
    aecCpfForm.length < 1
){
    throw 'Uma ou mais variáveis não foram devidamente declaradas.';
}


var isValid = function (value) {
  var cpf = value.replace(/[^\d]+/g,'');
  if (cpf.match(/[a-z]/i) ||
      cpf.length != 11 ||
      cpf.match(/^(.)\1+$/)) {
    return false;
  }

  return true;
}

var options = {
    onComplete: function(cpf) {
        aecCpfBtn.prop('disabled', false);
    },
}

aecCpfField.mask('000.000.000-00', options);

aecCpfForm.on('submit', function(e) {
  var field = aecCpfField[0];
  if (isValid(field.value)) {
    return;
  } else {
    e.preventDefault();
    alert(invalidText);
  }

})
