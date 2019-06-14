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
import Otros from './pages/Otros'
// import form from './pages/protected/form'

import {firebaseAuth} from '../initializers/firebase'

import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import Perfil from './pages/protected/Perfil';
// import Perfil from './pages/protected/Perfil';

const PrivateRoute = ({component:Component, authed, rest})=>(
    <Route 
        {...rest} 
            render={                 
            props => authed === true
                ? <Component {...props}/>
                : <Redirect to={{pathname: '/otros', state:{from:props.location}}}/>
    }/>
)

// const PublicRoute = ({component:Component, authed, rest})=>(
//     <Route 
//     {...rest} 
//         render={                 
//         props => authed === false
//             ? <Component {...props}/>
//             : <Redirect to='/cursos' />
// }/>
// )



class AppNav extends Component{

    constructor(props){
        super(props)
        this.state={
            // authed: false,
            authed: false
            // loading: true
        }
    }


    componentDidMount(){
        //evalua en todo momento la autenticación. Proporcioando por Firebase
        this.removeListener = firebaseAuth().onAuthStateChanged(user =>{
            if (user){
                this.setState({
                    authed:true,
                    loading:false
                })
            }else{
                this.setState({                    
                    loading:false
                })
            }
        })
    }

    componentWillUnmount(){
        this.removeListener()
    }

    render(){
        return this.state.loading === true
        ? <h1>Cargando...</h1>
        :(
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
                                    {
                                        (this.state.authed)
                                        ?
                                            <Link to="/publicaciones" className={this.props.classes.ac}>Publicaciones</Link>
                                        :
                                            <Link to="/otros" className={this.props.classes.ac}>Otros</Link>
                                    }
                                </Typography>

                                <Login/>
                                
                            </Toolbar>
                        </AppBar>
                    </div>        
                    <main className="sMain">                            
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/acerca" component={About} />
                            <Route exact path="/otros" component={Otros} />
                            {/* Llamando al componete simple Tabs */}
                            <PrivateRoute authed={this.state.authed}  exact path="/publicaciones" component={Tabs} />
                            {/* <Route path="/perfil" component={Perfil} /> */}
                            <PrivateRoute authed={this.state.authed} exact path="/Miperfil" component={Perfil} />
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
