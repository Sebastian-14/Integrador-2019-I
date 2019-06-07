import React, { Component } from 'react'

export default class Home extends Component {
    render() {
      return (
        <article className="Main-container">
          {/* <h1>Sección Inicio</h1> */}
          <div style={{padding:40, 
            background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)" 
          }}>
            {/* <img style={{height:600}} src="https://i.imgur.com/klfQY7I.jpg" alt=""/> */}
            <img style={{height:600}} src="https://i.imgur.com/57jJjXw.jpg" alt=""/>            
          </div>
        </article>
      )
    }
  }