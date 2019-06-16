import React, { Component } from 'react'
import { Login } from '../../Login';
import Perfil from './Perfil';

export default class CardPass extends Component {
  render() {
    return (
      <Login>
        <Perfil/>
      </Login>
    )
  }
}
