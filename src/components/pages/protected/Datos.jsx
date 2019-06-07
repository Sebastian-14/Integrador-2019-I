import React, { Component } from 'react'
import {publicaciones} from'../../../data/publicaciones.json'

export default class Formulario extends Component {

   constructor(){
      //Metodo super para heredar las funcionalidades de React
      super();
      this.state = {
        publicaciones
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
  
    }
  
    handleAddTodo(pub){
      this.setState({
        publicaciones: [...this.state.publicaciones, pub]
      })
    }

   render() {

      const publicaciones = this.state.publicaciones.map((pub, i) => {
         return(
           <div key={i}>
             <div>
               <div>
                  <h3>{pub.id}</h3>
                  <h3>{pub.titulo}</h3>
                 <span>
                  {pub.lastname}
                 </span>
               </div>
   
               <div>
                 <p>{pub.tag}</p>
                 <p>{pub.descripcion}</p>
                 <p><mark>{pub.url}</mark></p>
                 <p><mark>{pub.autor}</mark></p>
               </div>
               {/* <div>
                 <button onClick={this.removeTodo.bind(this, i)}>
                   Delete</button>
               </div> */}
   
             </div>
           </div>
         )
       })

      return (
         <div>
            {/* <span>
              {this.state.todos.length}
            </span> */}
          {/* <TodoForm onAddTodo={this.handleAddTodo}/> */}
            <div>
               <div>
                {publicaciones}
               </div>
            </div>
         </div>
      )
   }
}
