import React, { Component } from 'react'
// import { Button } from '@material-ui/core';
import firebase from './initializers/firebase'
// import {withStyles} from '@material-ui/core/styles'
import './Login.css'
// import Avatar from '@material-ui/core/Avatar'
// import IconButton from '@material-ui/core/IconButton'
// import ExitToApp from '@material-ui/icons/ExitToApp'

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// import {Link} from 'react-router-dom'


//Redux
//connect permite conectar react con el almacen
// import {connect} from 'react-redux'
// import {setUser, clearUser} from './initializers/actions'

// Axios
import axios from 'axios'
// import CardPassData from './components/Publications/CarddPassData';
import AuthElements from './components/AuthElements';
// import { MainContext } from './components/Publications/MainContext';

// export const MainContext = React.createContext({
//     user: [],
//     cod:0,
//     userLoggedIn: false
// })
export const MainContext = React.createContext()
//     userData: [],
//     user:0,
//     login: false,
//     // getUser:()=>{}
//   })

export class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            userLoggedIn: false,
            cod:0,
            user:[],
            photoUrl: '',
            name: '',
            email: '',
            lastname: '',
            open: false,
            anchorEl : null
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
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

                        //console.log(n)

                        //console.log(user.providerData[0].photoURL)

                        // Insertando un usario
                        let datos= {
                            image: this.state.photoUrl,
                            name: n,
                            lastname: n2,
                            email: this.state.email,
                        }

                        axios.post('https://shareinfotecsup.herokuapp.com/api/user/', datos)
                        .then(res => {
                            // this.state.pubs.push(res.data);
                            // var temp = this.state.pubs;
                            this.setState( {
                                cod:res.data.id,
                                user:res.data
                            });
                            console.log(res.data.id)
                            console.log(this.state.cod)
                            console.log(this.state.user)
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                        // let id = this.state.cod
                        // axios.get('http://shareinfotecsup.herokuapp.com/api/user/'+id)
                        // // axios.get('https://pokeapi.co/api/v2/pokemon/')
                        // .then(res => {
                        //     this.setState({ user: res.data})
                        // });
                        // console.log(this.state.user)


                    }else{
                        firebase.auth().signOut()
                        alert("Solo pueden ingresar usuarios de Tecsup")
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
            this.props.setUser(this.state.cod)
            // console.log(token)
        }).catch(err=>{
            console.log(err);
        })
    }

    logout(){
        firebase.auth().signOut().then(console.log);
        this.setState({
            userLoggedIn:false,
        })
    }

    handleClick(e){
    //     this.setState(state => ({
    //     open:
    //       state.open === false
    //         ? true
    //         : false,
    //   }))
        this.setState({
            anchorEl:e.currentTarget
        })
    }

    handleClose(){
        this.setState({
            anchorEl: null
        })
    }

    render(){
        return(
            <div>
                <MainContext.Provider value={this.state}>
                    {/* <AuthElements
                        user={this.state.userLoggedIn}
                        image={this.state.photoUrl}
                        anchorEl={this.state.anchorEl}
                        login={this.login}
                        logout={this.logout}
                        handleClick={this.handleClick}
                        handleClose={this.handleClose}
                    /> */}
                    {this.props.children}
                </MainContext.Provider>
                <div>
                    <AuthElements
                        user={this.state.userLoggedIn}
                        image={this.state.photoUrl}
                        anchorEl={this.state.anchorEl}
                        login={this.login}
                        logout={this.logout}
                        handleClick={this.handleClick}
                        handleClose={this.handleClose}
                    />
                </div>
            </div>
        )
    }

}

export const LoginConsumer = MainContext.Consumer;


//Mapear infromación del estado hacia props del componente
//Cuando se requiere nueva informacion del almcen se tiene que pasar por aqui
// const mapStateToProps = (state)=>{
//     return{
//         user: state.user
//     }
// }

// //Encajar acciones que podamos y ejecutar para modificar el estado
// const mapDispatchToProps = {
//     setUser,
//     clearUser
// }

// export  default connect(mapStateToProps, mapDispatchToProps)(Login)