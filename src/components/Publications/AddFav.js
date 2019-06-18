import React, { Component } from 'react'
import axios from 'axios'

//Material UI e Icons
import { IconButton } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade'

export default class AddFav extends Component {

  constructor(props){
    super(props)
    this.state={
      detail:[],
      active: false,
      userId: 0,
      PublicationId:0
    }
    this.addFav = this.addFav.bind(this)
    this.mostrar = this.mostrar.bind(this)
  }

  addFav(){
    let datos= {
      user:{
        id : 82
      },
      publication:{
        id : this.props.data
      }
    }

    axios.post('https://shareinfotecsup.herokuapp.com/api/favorites/', datos)
    .then(res => {
        // this.setState( {
        //     cod:res.data.id,
        //     user:res.data
        // });
        console.log(res)
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  mostrar(){
    console.log(this.props.data)
    console.log(this.props.user)
  }

  render() {

    // const data = this.props.data

    return (
      <div>
        <IconButton aria-label="Add to favorites" onClick={this.addFav} >
          <GradeIcon/>
        </IconButton>
      </div>
    )
  }
}
