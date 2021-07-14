const uppercase = require('./upperCase')

it('letra maiuscula',(done)=>{
  uppercase('test',(str)=>{
    expect(str).toBe('TEST');
    done();
  })
})