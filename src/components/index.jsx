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

class App1 extends Component{
    // Por usar as Router linea 3, de lo contrario seria BrowserRouter
    //Router -> encapsulador
    render(){
        return(
            <Router>
                <div>                    
                    <nav>
                        <ul>                            
                            <li>
                                <Link to="/acerca">Acerca</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr/>
                    
                    <main className="Main">                            
                        <Switch>                                
                            <Route path="/acerca" component={About} />                                                                
                            <Route component={Error404} />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}


export default App1