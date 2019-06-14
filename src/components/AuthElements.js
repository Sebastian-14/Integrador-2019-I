import React from 'react'

import { Button} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'
import {withStyles} from '@material-ui/core/styles'


//Componente funcional
const AuthElements = function(props) {
    //Todo atraves de props
    const logInButton=()=>{
        if(props.user) return([
            <Avatar key="auth-avatar-element" src={props.user.providerData[0].photoURL} />,
                <IconButton key="auth-sign-out-button-element" color="inherit" onClick={props.logout}>
                    <ExitToApp/>
                </IconButton>
        ]);

        return (            
            <Button variant="contained" onClick={props.login}>
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