import React, { Component } from 'react'
// import { MainContext } from './MainContext';
import { Login } from '../../Login';
import Perfil from './Perfil';

export default class CardPass extends Component {
  render() {
    return (
      <div>
        <Login>
          <Perfil/>
        </Login>
      </div>
    )
  }
}
