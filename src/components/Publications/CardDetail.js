import React, { Component } from 'react'
import axios from 'axios'

// const CardDetail = ({match})=>{

//   return(
//     <div>
//       <h1>{match.params.id}</h1>
//     </div>
//   )
// }

// export default CardDetail

export default class CardDetail extends Component{

  constructor(props){
    super(props)
    this.state={
      cod:'',
      pubs : [],
      user: []
    }
  }

  componentWillMount(){
    const {match : {params: {id}}}  = this.props
    // const { params } = this.props.match
    this.setState({
      cod : id
    })
  }

  componentDidMount(){
    console.log(this.state.cod)
    let id = this.state.cod
    axios.get('http://shareinfotecsup.herokuapp.com/api/publication/'+id)
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({
        pubs : res.data,
        user : res.data.user
      })
      console.log(res)
    });
    console.log(this.state.user)
  }

  render(){
    const d = this.state.pubs
    const u = this.state.user
    // let u = []
    // u.push(this.state.pubs.user)
    return(
      <div>
        <h1>{this.state.cod}</h1>
        <h1>Probando</h1>
        {/* {console.log(this.state.pubs.user)} */}
        <div>
          <h2>{u.name}</h2>
          <h2>{u.lastname}</h2>
          <h2>{d.title}</h2>
          <h2>{d.description}</h2>
            {
              (typeof(d.resources)=='object')?
              <div>
                {
                  d.resources.map((sp)=>{
                    return(
                      <div key={sp.id}>
                        {/* <p>{sp.id}</p> */}
                        <h2>
                          <a href={sp.path} target="noopener">
                            {sp.name}
                          </a>
                        </h2>
                      </div>
                    )
                  })
                }
              </div>
              :
              null
            }
        </div>
      </div>
    )
  }


}