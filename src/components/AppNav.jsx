import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from '../Login';
import { withStyles } from '@material-ui/core/styles';

class AppNav extends Component{
    render(){
        return(
            <div>
                <AppBar position='static'>
                    <Toolbar className={this.props.classes.nav}>

                        <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                        <a href="#" className={this.props.classes.ac}>Inicio</a>                            
                        </Typography>                        

                        <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                            <a href="#" className={this.props.classes.ac}>Archivos</a>                            
                        </Typography>

                        <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                            <a href="#" className={this.props.classes.ac}>Publicaciones</a>                            
                        </Typography>
                        
                        <Login/>
                    </Toolbar>
                </AppBar>
            </div>
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
