import React, { Component } from 'react'
// import axios from 'axios'

export default class Perfil extends Component {

  constructor(props){
    super(props)
    this.state={
      nombre: '',
      apellido: '',
      email: '',
      ciclo: '',
      carrera: ''
    }
  }

  // componentDidMount(){
  //   axios.get('http://shareinfotecsup.herokuapp.com/api/user/'+cod)
  //   // axios.get('https://pokeapi.co/api/v2/pokemon/')
  //   .then(res => {
  //     this.setState({ pubs: res.data})
  //     console.log(res)
  //   });
  //   console.log("Despues de props")
  // }

  render() {
    const cod = this.props.user
    return (
      <div>
        <h1>Mi perfil</h1>
        <form>
          <h2>Codigo : {cod}</h2>
          <h2>Nombre : </h2>
          <h2>Apellido : </h2>
          <h2>Email : </h2>
          <h2>Ciclo : </h2>
          <h2>Carrera : </h2>
        </form>
      </div>
    )
  }
}
