import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import firebase from './initializers/firebase'
import {withStyles} from '@material-ui/core/styles'
import './Login.css'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'

// import {Link} from 'react-router-dom'

// Axios
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props);

        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)

        this.state = {
            userLoggedIn: false,
            photoUrl: '',
            name: '',
            email: '',
            lastname: ''
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            // if(user.providerData[0].email.slice(-13)=='tecsup.edu.pe'){
                if(user){
                    if(user.providerData[0].email.slice(-13) === 'tecsup.edu.pe'){
                        
                        //Hay inicio de sesión
                        this.setState({
                            userLoggedIn:true,
                            //Obtener la imagen de perfil
                            photoUrl:user.providerData[0].photoURL,
                            name: user.providerData[0].displayName,
                            email: user.providerData[0].email
                        })

                        let dat = this.state.name
                        let data = dat.split(" ")
                        let n = data[0]+ " " + data[1]
                        let n2 = data[2]+ " "+ data[3]

                        console.log(n)

                        console.log(user.providerData[0].photoURL)

                        // Insertando un usario

                        let datos= {
                            image: this.state.photoUrl,
                            name: n,
                            lastname: n2,
                            email: this.state.email,
                        }
                        
                        axios.post('https://shareinfotecsup.herokuapp.com/api/user/', datos)
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                    }else{
                        
                        firebase.auth().signOut()
                    }
                }else{
                    //No hay ininco de sesión
                    this.setState({
                        userLoggedIn:false,
                        //Onbtener la imagen de perfil
                        photoUrl:'',
                        name: '',
                        email: ''
                    })
                }
        })
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result=>{
            //Obtener token. Firebase no almacena los token,, solo te lo da
            // let token = result.credential.accessToken;
            // console.log(token)
        }).catch(err=>{
            console.log(err);
        })
    }

    logout(){
        firebase.auth().signOut().then(console.log);
    }

    logInButton(){
        if(this.state.userLoggedIn) return([
            <Avatar src={this.state.photoUrl}>
                {/* <Link to="/perfil"/> */}
            </Avatar>,
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