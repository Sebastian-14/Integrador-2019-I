import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`

export default class Prueba extends Component {
   
   constructor(props){
      super(props)
      this.state = ({
         datos:[],
         id:0,
         name:'',
         lastname: '',
         email: '',
         token: '',
         cumulativeScore: '',
         publicationsNumber: '',
         currentScore: '',
         user_name:''
      })
   }
  

  //  componentWillMount() {
  //     axios.get('http://shareinfotecsup.herokuapp.com/api/users/all')
  //     // axios.get('https://pokeapi.co/api/v2/pokemon/')
  //     .then(res => {
  //       this.setState({ datos: res.data })
  //       console.log(res)
  //     });
  //   }

    componentWillMount() {
      axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
      // axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        this.setState({ datos: res.data })
        console.log(res)
      //   console.log(datos)
      });
    }

   render() {
      return (
         <MainContainer>
            
            <table border="1">
                   <thead>
                      <tr>
                         {/* <th>Nombre</th>
                         <th>Apellido</th>
                         <th>Email</th>
                         <th>Cumulative Score</th>
                         <th>Publications</th>
                         <th>Score</th> */}
                         <th>Title</th>
                         <th>User_id</th>
                         <th>User_name</th>
                         <th>user_lastname</th>
                         <th>user_email</th>
                      </tr>
                   </thead>
                   {this.state.datos.map( (data,index) => {
              return (
                
                   <tbody>
                      <tr key={data.id}>
                        {/* <td>{data.name}</td>
                        <td>{data.lastname}</td>
                        <td>{data.email}</td>
                        <td>{data.cumulativeScore}</td>
                        <td>{data.publicationsNumber}</td>
                        <td>{data.currentScore}</td> */}
                        <td>{data.title}</td>
                        <td>{data.user.id}</td>
                        <td>{data.user.name}</td>
                        <td>{data.user.lastname}</td>
                        <td>{data.user.email}</td>
                      </tr>
                   </tbody>
                
              );
            })}
            </table>
         </MainContainer>
      )
   }
}
