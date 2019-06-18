import React, { Component } from 'react'
import axios from 'axios'
import CardUserData from './CardUserData';
// import CardUserProfile from './CardUserProfile';

export default class CardListDataUser extends Component{

  constructor(props){
    super(props)
    this.state={
      // codigo por props
      cod:0,
      // Datos del usuario
      // user: [],
      // Publicaciones del usuario
      pubsU:[]
    }
  }

  componentWillMount(){
    const {match : {params: {id}}}  = this.props
    // Actualizando cod
    this.setState({
      cod : id
    })
  }

  componentDidMount(){
    // Guardando las publicaciones del user con el cod
    console.log(this.state.cod)
    let id = this.state.cod
    axios.get(`http://shareinfotecsup.herokuapp.com/api/user/${id}/publications/`)
    .then(res => {
      this.setState({
        // user: res.data[0].user,
        pubsU : res.data
      })
      console.log(res.data[0].user)
    });

    //Comprobando que se actualizen los valores del state
    setTimeout(()=>{console.log(this.state.pubsU[0])},3000)
    // setTimeout(()=>{console.log(this.state.user)},3000)
  }

  render(){
    //Publicaciones del usuario
    const p = this.state.pubsU
    //datos del usuario
    // let a = []
    // a = this.state.pubsU[0]
    // const u = a
    // setTimeout(()=>{u = (this.state.pubsU[0])},2000)
    // console.log(u)
    return(
      <div>
        <h1>Hello</h1>
        {/* <h1>{u.name}</h1>
        <h1>{u.lastname}</h1> */}
        {/* <img src={u.image} height="200px" alt="imagen"/> */}
        {/* <CardUserProfile data={p}/> */}
        <CardUserData data={p}/>
      </div>
    )
  }


}