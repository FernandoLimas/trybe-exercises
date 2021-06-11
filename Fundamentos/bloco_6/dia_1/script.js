function criarEstados(){
  let estados = document.querySelector('#estado');
  let opçoesEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
for(let cEstados = 0; cEstados<opçoesEstados.length; cEstados +=1){
  let options = document.createElement('option');
  estados.appendChild(options).innerText=opçoesEstados[cEstados];
  options.value=opçoesEstados[cEstados]
}
}
criarEstados()