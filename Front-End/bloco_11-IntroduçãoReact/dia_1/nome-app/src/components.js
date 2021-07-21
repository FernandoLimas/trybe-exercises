import React from 'react'

const lista = (value) =>{
  return (
    <li>{value}</li>
  )
}
const ordem = ['10','20','30','40'];

class HelloWord extends React.Component{
  render(){
    return (
      <div>
        <h1>
          <p>HelloWord</p>
          <ul>{ ordem.map(item => lista(item))}</ul>
        </h1>
      </div>
    )
  }
}

export default HelloWord
