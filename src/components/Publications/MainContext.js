

import React from 'react'
import CardAdd from './CardAdd';

export default function(props){

  const user = props.user

  return(
    <CardAdd user={user}/>
  )

}

// // import axios from 'axios'

// //Context
// export const MainContext = React.createContext({
//   userData: [],
//   user:0,
//   login: false,
//   getUser:()=>{}
// })

//Provider
//  export class MainContextProvider extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       userData:[],
//       user:0,
//       login:false
//     }
//   }

//   // componentWillMount(){
//   //   axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
//   //   // axios.get('https://pokeapi.co/api/v2/pokemon/')
//   //   .then(res => {
//   //     this.setState({ datos: res.data})
//   //     console.log(res)
//   //   });
//   //   console.log("Listo")
//   //   console.log(this.state.pubs)
//   // }

//   render() {
//     return (
//       <MainContext.Provider value={
//         {
//           //usuarios: 'Sebastian',
//           datos:this.state.datos,
//           usuarios: this.state.usuarios,
//           titulo: 'Hello',
//           login:'true'
//         }
//       }>
//         {this.props.children}
//       </MainContext.Provider>
//     )
//   }
// }

//Consumer
// export const MainContextConsumer = MainContext.Consumer;