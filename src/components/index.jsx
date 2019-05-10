import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import About from './pages/About'
import Error404 from './pages/Error404'
import Home from './pages/index'
import AppNav from './AppNav'

class App1 extends Component{
    // Por usar as Router linea 3, de lo contrario seria BrowserRouter
    //Router -> encapsulador
    render(){
        return(
            <div></div>
        )
    }
}


export default App1