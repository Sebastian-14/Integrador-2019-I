import React, { Component } from 'react'
import { Button} from '@material-ui/core';
import firebase from './initializers/firebase'
import {withStyles} from '@material-ui/core/styles'
import './Login.css'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'


class Login extends Component {

    constructor(props){
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            userLoggedIn:false,
            photoUrl:'',            
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{

            if(user){
                //Hay inicio de sesión
                this.setState({
                    userLoggedIn:true,
                    //Onbtener la imagen de perfil
                    photoUrl:user.providerData[0].photoURL
                })

            }else{
                //No hay ininco de sesión
                this.setState({
                    userLoggedIn:false,
                    //Onbtener la imagen de perfil
                    photoUrl:''
                })
            }
        })
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        //Permiso para solo leer
        // provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

        firebase.auth().signInWithPopup(provider).then(result=>{
            //Obtener token. Firebase no almacena los token,, solo te lo da            
            let token = result.credential.accessToken;
        }).catch(err=>{
            console.log(err);
        })
    }

    logout(){
        firebase.auth().signOut().then(console.log);
    }

    logInButton(){
        if(this.state.userLoggedIn) return([
            <Avatar src={this.state.photoUrl} />,
                <IconButton color="inherit" onClick={this.logout}>
                    <ExitToApp color="dark"/>
                </IconButton>
        ]);

        return (
            <Button variant="contained" color="secondary" onClick={this.login}>
                <i className="fab fa-google"></i>
                Iniciar Sesión con Google
            </Button>
        )
    }

    render() {
        return (
            <div className={this.props.classes.container}>
                {/* {!this.state.userLoggedIn && <Button variant="contained" className={this.props.classes.button} onClick={this.login}>
                Iniciar Sesión con google
                </Button>} */}
                {this.logInButton()}
            </div>
        )
    }
    
}

export default withStyles({
    button:{
      backgroundColor:'red'
    },
    container:{
        display:'flex',
        flexDirection:'row'
    }
  }) (Login);