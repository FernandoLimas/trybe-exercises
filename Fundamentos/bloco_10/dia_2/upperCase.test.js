// const uppercase = require('./upperCase')

// test('letra maiuscula',(done)=>{
//   uppercase('test',(str)=>{
//     expect(str).toBe('TEST');
//     done();
//   })
// })
const troca = (stg) => {
  let m = stg.replace(/x/gi, 'Fernando')
return m
}
console.log(troca('x filipe de X lima x'));