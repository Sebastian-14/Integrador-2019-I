import React, { Component } from 'react'
// import { Button } from '@material-ui/core';
import firebase from './initializers/firebase'
// import {withStyles} from '@material-ui/core/styles'
import './Login.css'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from 'react-router-dom'


//Redux
//connect permite conectar react con el almacen
// import {connect} from 'react-redux'
// import {setUser, clearUser} from './initializers/actions'

// Axios
import axios from 'axios'

export const MainContext = React.createContext({
    user: [],
    cod:0,
    userLoggedIn: false
})


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

    // componentWillMount(){
    //     axios.get('http://shareinfotecsup.herokuapp.com/api/user/')
    //     .then(res => {
    //     this.setState({ pubs: res.data})
    //     console.log(res)
    //     });
    // }

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
                            console.log(res.data.id);
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
                        alert("Solo usuarios de Tecsup")
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

    logInButton(){
        if(this.state.userLoggedIn) return(
            <div>
                <Button onClick={this.handleClick} aria-haspopup="true" aria-controls="simple-menu">
                    <Avatar src={this.state.photoUrl}>
                    </Avatar>
                </Button>
                <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <Link to="/perfil">
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    </Link>
                    <Link to="/misPublicaciones">
                        <MenuItem onClick={this.handleClose}>Mis Publicaciones</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={this.handleClose}>Cerrar</MenuItem>
                    </Link>
                </Menu>


                {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button> */}

                <IconButton color="inherit" onClick={this.logout}>
                    {/* <ExitToApp color="dark"/> */}
                    <ExitToApp/>
                </IconButton>
            </div>
        );

        return (
            <Button variant="contained" color="secondary" onClick={this.login}>
                <i className="fab fa-google"></i>
                Iniciar Sesión con Google
            </Button>
        )
    }

    render() {
        return (
           <div>
                {this.logInButton()}
                <MainContext.Provider
                    value={
                        {
                            user: this.state.user,
                            cod:this.state.cod,
                            userLoggedIn: this.state.userLoggedIn
                        }
                    }
                >
                {this.props.children}
                </MainContext.Provider>
           </div>
        )
    }

}


// export class LoginProvider extends Component{

//     constructor(props){
//         super(props)
//         this.state={
//             user: this.props.user,
//             cod: this.props.cod,
//             userLoggedIn : this.props.userLoggedIn
//         }
//     }

//     render(){
//         return(
//              <MainContext.Provider
//                     value={
//                         {
//                             user: this.state.user,
//                             cod:this.state.cod,
//                             userLoggedIn: this.state.userLoggedIn
//                         }
//                     }
//                 >
//                     {this.props.children}
//             </MainContext.Provider>
//         )
//     }
// }

// export default withStyles({
//     button:{
//       backgroundColor:'red'
//     },
//     container:{
//         display:'flex',
//         flexDirection:'row'
//     }
//   }) (Login);


export const MainContextConsumer = MainContext.Consumer;

export class LoginConsumer extends Component{
    render(){
        return(
            <MainContext.Consumer>
                {this.props.children}
            </MainContext.Consumer>
        )
    }
}

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

// export default connect(mapStateToProps, mapDispatchToProps)(Login)