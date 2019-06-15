import React, { Component } from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core';

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    max-width: "500px";
    min-width: "500px";
  `

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

  componentWillMount(){
    let cod= 62
    axios.get('http://shareinfotecsup.herokuapp.com/api/user/'+cod)
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({ info: res.data})
      console.log(res)
    });
    console.log("Despues de props")
  }

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
    return (
      <Container>
        <br/>
        <form onSubmit={this.guardar}>
        <h1>Mi perfil</h1>
        <img src={this.state.info.image} alt="imagen" height='100'/>
          <h2>Codigo : {this.state.info.id}</h2>
          <h2>Nombre : {this.state.info.name}</h2>
          <h2>Apellido : {this.state.info.lastname}</h2>
          <h2>Email : {this.state.info.email}</h2>
          <div>
            <h2>Ciclo : {this.state.info.cycle}</h2>
            <TextField
                    fullWidth
                    label="Ciclo"
                    name="cycle"
                    value={this.state.ciclo}
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    onChange = {this.handleInput}
                  />

          </div>
          <h2>Carrera : {this.state.info.career}</h2>
          <TextField
                    fullWidth
                    label="Carrera"
                    value={this.state.carrera}
                    name="career"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    onChange = {this.handleInput}
                  />
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
        </form>
      </Container>
    )
  }
}
