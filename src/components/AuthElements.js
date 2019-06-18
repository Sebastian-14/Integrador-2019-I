import React from 'react'
import {Link} from 'react-router-dom'

import { Button, Menu, MenuItem} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'
import {withStyles} from '@material-ui/core/styles'
// import { MainContext } from '../Login';
// import { LoginConsumer } from '../Login';


//Componente funcional
const AuthElements = function(props) {
    //Todo atraves de props
    const logInButton=()=>{
        if(props.user) return(
            <div>
                <Button onClick={props.handleClick} aria-haspopup="true" aria-controls="simple-menu">
                    <Avatar key="auth-avatar-element" src={props.image} />
                </Button>
                <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={props.anchorEl}
                    open={Boolean(props.anchorEl)}
                    onClose={props.handleClose}
                >
                    <Link to="/perfil">
                        <MenuItem onClick={props.handleClose}>Profile</MenuItem>
                    </Link>,
                    <Link to="/misPublicaciones">
                        <MenuItem onClick={props.handleClose}>Mis Publicaciones</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={props.logout}>Cerrar</MenuItem>
                    </Link>
                </Menu>
                <IconButton key="auth-sign-out-button-element" color="inherit" onClick={props.logout}>
                    <ExitToApp/>
                </IconButton>
            </div>
        )

        return (
            <Button variant="contained" color="secondary" onClick={props.login}>
                Iniciar Sesión con Google
            </Button>
        )
    }

    return (
        <div className={props.classes.container}>
            {logInButton()}
        </div>
    )

}

export default withStyles({
    button:{
      backgroundColor:'red'
    },
    container:{
        display:'flex',
        flexDirection:'row'
    }
  }) (AuthElements);