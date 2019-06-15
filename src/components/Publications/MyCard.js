import React, { Component } from 'react'
import axios from 'axios'

export default class MyCard extends Component {

  constructor(props){
    super(props)
    this.state={
      title: '',
      description: '',
    }
  }

  componentDidMount(){
    // let cod= 22
    axios.get('https://shareinfotecsup.herokuapp.com/api/user/22/publications/')
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({ info: res.data})
      console.log(res)
    });
    console.log("Despues de props")
  }

  render() {
    // const cod = this.props.user
    return (
      <div>
        <h1>Mi perfil</h1>
        <form>
          <h2>Codigo : {this.state.info.id}</h2>
          <h2>Title : {this.state.info.title}</h2>
          <h2>Description : {this.state.info.description}</h2>
          {/* <h2>Email : {this.state.info.email}</h2>
          <h2>Ciclo : {this.state.info.cycle}</h2>
          <h2>Carrera : {this.state.info.career}</h2> */}
        </form>
      </div>
    )
  }
}
