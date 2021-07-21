const sum = require('./sum')
// implemente seus testes aqui
describe('soma', () =>{ 
  test('soma 4 e 5', () => {
    expect(sum(4,5)).toEqual(9);
  });
  test('soma 0 e 0', () => {
    expect(sum(0,0)).toEqual(0);
  } );
  test('numero e uma string', () =>{
    expect(() => { sum (4,'5');}).toThrow()
  });
  test('reporta a msg de erro', ()=>{
    expect(() => { sum (4,'5')}).toThrow('parameters must be numbers')
  });
});

