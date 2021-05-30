// Inverter lado do triângulo.


let n = 5;
let symbol = '*';
let coluna= '';
let pos = n;

for (let i = 0; i < n; i += 1) {
  for (let a = 0; a <= n; a += 1) {
    if (a < pos) {
      coluna = coluna + ' ';
    } else {
      coluna = coluna + symbol;
    }
  }
  console.log(coluna);
  coluna= '';
  pos = pos -1 ;
}