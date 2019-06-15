import React, { Component } from 'react';
import axios from 'axios'
import {publicaciones} from '../../../data/publicaciones.json'
import PublicationForm from './PublicationForm';

class MostrarForm extends Component {
  constructor(){
    super();
    this.state = {
      pubs:[],
      publicaciones,
    }
  }

  componentWillMount() {
    axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({ pubs: res.data})
      console.log(res)
    });
  }

  // handleAddTodo(pub,src){
  //   this.setState({
  //     pubs: [...this.state.pubs, pub],
  //     // srcs:[...this.state.srcs, src]
  //   })
  // }

  // eliminar(cod){
  //   let rpta = window.confirm("Desea eliminar?");
  //   if(rpta){
  //     axios.delete('http://shareinfotecsup.herokuapp.com/api/publication/'+cod+'/')
  //     .then(res => {
  //       var temp = this.state.pubs.filter((producto)=>producto.id !== cod);
  //       this.setState({
  //         pubs: temp
  //       })
  //     });
  //   }
  // }

  // remove(index){
  //   this.setState({
  //     pubs: this.state.publs.filter((e,i)=>{
  //       return i!== index
  //     })
  //   })
  //   // console.log(index)
  // }

  render() {
    // const pubs = this.state.pubs.map((pub, i) => {
    //   return(
    //     <div className="col-md-4" key={i}>
    //       <div>
    //         <div>
    //           <h3>{pub.title}</h3>
    //           <span>
    //             {pub.tag}
    //           </span>
    //         </div>
    //         <div>
              
    //           <p>{pub.description}</p>
    //           <p>{pub.createdAt}</p>
    //           <p>{pub.updatedAt}</p>
    //           {/* Resource: <p>{srcsresources.id}</p> */}
    //           {/* {this.state.resources.map((m,i)=>{
    //               <p>{m.id}</p>
    //             }
    //           )} */}
    //           <p>{pub.user.id}</p>
    //         </div>
    //         <div className="card-footer">
    //           <button className="btn btn-danger" onClick={()=>this.eliminar(pub.id)}>
    //             Delete</button>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // })
    return (
      <div className="MostrarForm">
          {/* Pasando datos vía props */}
          {/* <PublicationForm onAddPublication={this.handleAddTodo}/> */}
          <PublicationForm/>
          {/* <div className="container">
              {pubs}
          </div> */}
      </div>

      
    );
  }
}

export default MostrarForm;
