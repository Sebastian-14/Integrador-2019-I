import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'  
import Login from './Login';
import AppNav from './components/AppNav'
import App1 from './components';
import SimpleTabs from './components/Tabs'
import Form from './components/pages/protected/Form'
import Textfields from './components/pages/protected/Textfields'
import CustomizedSnackbars from './components/pages/protected/Snackbar';

class App extends Component {
  render() {
    return (
      <div className="App">

      <AppNav/>
      <App1/>

      {/* <Form/> */}
      {/* <Textfields/> */}
      <CustomizedSnackbars/>

      {/* <SimpleTabs/> */}
       
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Login/> */}
          {/* <Button variant="contained" className={this.props.classes.button}>
            Learn React
          </Button> */}
      </div>
    );
  }
}

export default withStyles({
  button:{
    backgroundColor:'red'
  }
}) (App);
