import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from '../Login';
import { withStyles } from '@material-ui/core/styles';
import About from './pages/About'
import Error404 from './pages/Error404'
import Home from './pages/index'
import Tabs from './Tabs'
// import form from './pages/protected/form'

import {
    Route,
    BrowserRouter as Router,
    Link,
    // Redirect,
    Switch
} from 'react-router-dom'
// import Perfil from './pages/protected/Perfil';

class AppNav extends Component{
    render(){
        return(
            <Router>
                <div>
                    <div>
                        <AppBar position='static'>
                            <Toolbar className={this.props.classes.nav}>
                                <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                                {/* <a href="#" className={this.props.classes.ac}>Inicio</a> */}
                                <Link to="/" className={this.props.classes.ac}>Inicio</Link>
                                </Typography>                        

                                <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                                    {/* <a href="#" className={this.props.classes.ac}>Archivos</a> */}
                                    <Link to="/acerca" className={this.props.classes.ac}>Acerca</Link>
                                </Typography>

                                <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                                    {/* <a href="#" className={this.props.classes.ac}>Publicaciones</a> */}
                                    <Link to="/publicaciones" className={this.props.classes.ac}>Publicaciones</Link>
                                </Typography>                            
                                <Login/>                                                       
                            </Toolbar>
                        </AppBar>
                    </div>        
                    <main className="Main">                            
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/acerca" component={About} />
                            {/* Llamando al componete simple Tabs */}
                            <Route path="/publicaciones" component={Tabs} />
                            {/* <Route path="/perfil" component={Perfil} /> */}
                            <Route component={Error404} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default withStyles({
    grow:{
        flexGrow:1, textAlign:'left'
    },
    nav:{
        color:'white',
        background: '#428DDA'
    },
    ac:{
        textDecoration:'none',
        color:'white',
    }  
})(AppNav)
