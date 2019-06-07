import React, { Component } from 'react'
import axios from 'axios'

export default class Resources extends Component {
  constructor(props){
    super(props)
    this.state={
      pubs :[],
      title:'',
      createdAt: '',
      updatedAt:'',
      description:'',
      resources:[{
        path:'',
        name:''
      }],
      r:[],
      url:'',
      user:{
        id: 0
      }
    }

    this.handleR = this.handleR.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.guardar = this.guardar.bind(this)
    
  }

  componentWillMount() {
    axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({ 
        pubs: res.data,
        r: res.data.resources
        // r: res.data[]
      })

      const z = this.state.pubs.map((p,i)=>
        p.resources.map
      )
      // console.log(res)
      // console.log(this.state.pubs[2]['resources'])
      // console.log(this.state.pubs)
      console.log(z)
    });
  }

  handleR(e){
    const names = e.target.name.split(".");
    console.log(names)
    //resources
    const value = e.target.value;
    console.log(value)
    //path

    this.setState((state) => {

      state[names[0]][names[1]] = value;
      //state[resources][path] = value

      return {[names[0]]: state[names[0]]};

    });

    // console.log(this.state.user)
    console.log(this.state.resources)
  }

  handleChange(e){
    const names = e.target.name.split(".");
    console.log(names)  //0:"user" //1:"id"
    const value = e.target.value;
    console.log(value)
    this.setState((state) => {
      state[names[0]][names[1]] = value;
      return {[names[0]]: state[names[0]]};
      // console.log(state)
    });

    console.log(this.state.user)
    console.log(this.state.resources)
  }

  handleInput(e) {
    //Capturando los datos
    const { value, name } = e.target;
    this.setState({
        [name] : value
    })
    // console.log(this.state);
  }

  guardar(e){
      e.preventDefault();
      let cod = this.state.id;

      let datos = {
        title : (this.state.title) ? this.state.title : Resources.defaultProps.title,
        description : (this.state.description) ? this.state.description : Resources.defaultProps.description,
        createdAt : (this.state.createdAt) ? this.state.createdAt : Resources.defaultProps.createdAt,
        updatedAt : (this.state.updatedAt) ? this.state.updatedAt : Resources.defaultProps.updatedAt,
        user : {
            id: (this.state.user.id) ? this.state.user.id : Resources.defaultProps.user.id
        },
        resources:[
          {
            path: this.state.resources[0].path,
            name: this.state.resources[0].name
          }
        ]
      }

      if(cod>0){ //Editamos un registro
         axios.put('http://shareinfotecsup.herokuapp.com/api/publication/'+cod+'/', datos )
         .then(res => {
                  // let indx = this.state.pos;
                  // this.state.pubs[indx] = res.data;
                  // var temp = this.state.pubs;
                  this.setState( {
                    pos: null,
                    id: 0,
                    title : '',
                    description : '',
                    resources:{
                      path: '',
                      name:'',
                    },
                    user:{
                      id:0
                    }
                  });
               })
         .catch((error)=>{
               console.log(error.toString());
         });
      }else{ // Nuevo registro
         axios.post('http://shareinfotecsup.herokuapp.com/api/publication/', datos )
         .then(res => {
                  this.state.pubs.push(res.data)
                  var temp = this.state.pubs
                  this.setState( {
                    id: 0,
                    title : '',
                    description : '',
                    createdAt : '',
                    updatedAt : '',
                    resources: [
                      {
                        path: '',
                        name:'',
                      }
                    ],
                    user: {
                      id:0
                    },
                    pubs : temp
                  });
                  console.log(res)
               })
         .catch((error)=>{
               console.log(error.toString());
         });
      }
   }
  
  render() {
    return (
      <div>
      <form onSubmit={this.guardar}>
        Title : <input type="text" name="title" value={this.state.title} onChange = {this.handleInput}/>
        <br/>
        Description : <input type="text" name="description" value={this.state.description} onChange = {this.handleInput}/>
        <br/>
        CreatedAt: <input type="date" name="createdAt" value={this.state.createdAt} onChange = {this.handleInput}/>
        <br/>
        UpdatedAt: <input type="date" name="updatedAt" value={this.state.updatedAt} onChange = {this.handleInput}/>
        <br/>
        Ingrese url: <input type="text" name="resources.path" onChange={this.handleR} />
        <br/>
        Ingrese user: <input type="text" name="user.id" onChange={this.handleChange} />
        <br/>
        <button type="submit">Save</button>
      </form>

        {
          this.state.pubs.map((p, i)=>{
            return(
              <div key={p.id}>
                <p>{p.user.name}</p>
                {
                  (typeof(p.resources)=='object')?
                  
                  <div>
                  {/* {console.log(p.resources)} */}
                    { 
                      p.resources.map((sp, i)=>{
                        return(
                          <div key={sp.id}>
                            
                            <p>{sp.id}</p>
                            <p>{sp.path}</p>
                            <p>{sp.extension}</p>
                            <p>{sp.type}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                  :
                  null
                }
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Resources.defaultProps = {
  title : "Nuevo",
  description : "Nueva",
  createdAt: Date(),
  updatedAt: Date(),
  user: {
      id:1
  },
  resources:[{
    path:'https://google.com',
    name:'Google',
    extension: 'html',
    type:'enlace'
  }],
  r:[],
}
