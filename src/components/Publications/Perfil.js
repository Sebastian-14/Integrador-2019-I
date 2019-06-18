import React, { Component } from 'react'
import axios from 'axios'
// import { MainContext } from './MainContext';
import { LoginConsumer } from '../../Login';
// import { TextField, Button } from '@material-ui/core';

// import styled from 'styled-components'
// import { LoginConsumer } from '../../Login';

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* flex-wrap: wrap; */
//     /* flex-direction: row; */
//     max-width: "500px";
//     min-width: "500px";
//   `

export default class Perfil extends Component {

  constructor(props){
    super(props)
    this.state={
      name: '',
      lastname: '',
      image: '',
      email: '',
      cycle: '',
      career: '',
      info:[]
    }
    this.handleInput = this.handleInput.bind(this)
    this.guardar = this.guardar.bind(this)
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
        [name] : value
    })
    console.log(this.state);
  }

  // componentWillMount(){
  //   let cod= 62
  //   axios.get('http://shareinfotecsup.herokuapp.com/api/user/'+cod)
  //   // axios.get('https://pokeapi.co/api/v2/pokemon/')
  //   .then(res => {
  //     this.setState({ info: res.data})
  //     console.log(res)
  //   });
  //   console.log("Despues de props")
  // }

  guardar(e){
    e.preventDefault();
    let cod = 62
    let datos = {
      name: this.state.info.name,
      lastname:this.state.info.lastname,
      email : this.state.info.email,
      career : this.state.career,
      cycle : this.state.cycle
  }
    if(cod>0){ //Editamos un registro
      axios.put('http://shareinfotecsup.herokuapp.com/api/user/'+cod+'/', datos )
      .then(res => {
        this.setState({
          name: res.data.name
        })
      })
      .catch((error)=>{
          console.log(error.toString());
      });
      console.log(this.state.name)
    }
    console.log(this.state.name)
  }

  render() {
    // const cod = this.props.user
    return(
      <div>
          <LoginConsumer>
            {
              value=>{
                return(
                  <div>
                    Codigo: <h1>{value.user.id}</h1>
                    Nombre: <h1>{value.user.name}</h1>
                    Apellido: <h1>{value.user.lastname}</h1>
                    Email: <h1>{value.user.email}</h1>
                    Score: <h1>{value.user.score}</h1>
                    Ciclo: <h1>{value.user.cycle}</h1>
                    Carrera: <h1>{value.user.career}</h1>
                  </div>
                )
              }
            }
          </LoginConsumer>
            {console.log(this.props)}
      </div>
    )
  }
}
