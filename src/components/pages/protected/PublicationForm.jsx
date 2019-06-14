import React, {Component} from 'react';
import axios from 'axios'
import update from 'immutability-helper';
// import UploadFiles from '../UploadFiles';

//Firebase
import firebase from 'firebase'

//Styled-Components
import styled from 'styled-components'

// Material UI
// import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';

// Iconos
// import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: "300px";

  `

class PublicationForm extends Component{

  constructor(props){
      super(props)
      this.state = {
          pubs: [],
          id: 0,
          title : "",
          description : "",
          createdAt: "",
          updatedAt: "",
          resources:[
            {
              path:'',
              name:''
            }
          ],
          user: {
            id:0
          },
          progress : 0,
          image : null,
          url: ''
      }
      this.handleInput = this.handleInput.bind(this);
      this.guardar = this.guardar.bind(this);
      this.handelChange = this.handelChange.bind(this);
      this.handleName = this.handleName.bind(this);

      this.handlePath = this.handlePath.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }


//Para Carga de Archivos
  // *** START ***
  handleFile(e){
    if (e.target.files[0]) {
      const image = e.target.files[0];
      // this.setState(() => ({image}))
      
      // console.log(this.state.image)

      const x = e.target.files[0].name;
  
      const datos = this.state
  
      const newData = update(datos, {
          resources:[{
            name:{
              $set:
                x
            }
          }],
          image:{
            $set:
            image
          }
        }
      )
      this.setState(newData)
    }
  }

  handleUpload(){
    const {image} = this.state
    const storageRef = firebase.storage().ref(`/data/${image.name}`)
    const task = storageRef.put(image);

    task.on('state_changed', (snapshot) =>{
      let per = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
      this.setState({
        progress: per,
      })
    }, (error)=>{
      console.log(error.message)
    }, ()=>{
      firebase.storage().ref('data').child(image.name).getDownloadURL().then(url=>{
        console.log(url);

        // const enlace = this.state.url
        const datos = this.state
        const newData = update(datos, {
            resources:[{
              path:{
                $set:
                  url
              }
            }]
          }
        )
        this.setState(newData)

        // this.setState({
        //   url
        // })
      })
      console.log(this.state.url)
    });

  }

  // *** END ***

  handelChange(e){
    const names = e.target.name.split(".");
    const value = e.target.value;
    this.setState((state) => {
    state[names[0]][names[1]] = value;
    return {[names[0]]: state[names[0]]};
    })
    console.log(this.state.user)
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
        [name] : value
    })
    console.log(this.state);
  }

  handleName(e){
    const { value } = e.target;

    const datos = this.state

    const newData = update(datos, {
        resources:[{
          name:{
            $set:
              value
          }
        }]
      }
    )
    this.setState(newData)
  }

  handlePath(e){
    const { value } = e.target;

    const datos = this.state

    const newData = update(datos, {
        resources:[{
          path:{
            $set:
              value
          }
        }]
      }
    )
    this.setState(newData)
  }

  guardar(e){
      e.preventDefault();
      let cod = this.state.id;
      let datos = {
        title : this.state.title,
        description : this.state.description,
        createdAt : (this.state.createdAt) ? this.state.createdAt : PublicationForm.defaultProps.createdAt,
        updatedAt : (this.state.updatedAt) ? this.state.updatedAt : PublicationForm.defaultProps.updatedAt,
        resources : [
          {
            path: this.state.resources[0].path,
            name: this.state.resources[0].name
          }
        ],
        user : {
          id: (this.state.user.id) ? this.user.id : PublicationForm.defaultProps.user.id
        }
    }
      if(cod>0){ //Editamos un registro
        axios.put('http://shareinfotecsup.herokuapp.com/api/publication/'+cod+'/', datos )
        .then(res => {
              //let indx = this.state.pos;
              //this.state.pubs[indx] = res.data;
              //var temp = this.state.pubs;
              this.setState( {
                  pos: null,
                  id: 0,
                  title : '',
                  description : '',
                  createdAt : '',
                  updatedAt : '',
                  resources:{
                    path: '',
                    name:'',
                  },
                  user : {
                      id: 0
                  }
              });
            })
        .catch((error)=>{
            console.log(error.toString());
        });
      }else{ // Nuevo registro
          axios.post('http://shareinfotecsup.herokuapp.com/api/publication/', datos )
          .then(res => {
                  this.state.pubs.push(res.data);
                  var temp = this.state.pubs;
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
                      user : {
                          id:0
                      },
                      pubs : temp
                  });
              })
          .catch((error)=>{
              console.log(error.toString());
          });
      }
  }

  render(){

    return(
        <Container>
        <form onSubmit={this.guardar}>

            <TextField
              fullWidth
              label="Tittulo"
              placeholder="Awesome Title"
              name="title"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange = {this.handleInput}
            />
            <br/>
            <br/>

            <TextField
//              className={classes.margin}
              fullWidth
              label="Descripcion"
              placeholder="Añade un breve discripción"
              name="description"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange = {this.handleInput}
            />
            <br/>
            <br/>

            <LinearProgress variant="determinate" value={this.state.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleFile}/>
            <br/>
            <br/>
            <Button variant="contained" onClick={this.handleUpload}>
              Upload
              <CloudUploadIcon/>
            </Button>
            <br/>
            <br/>
            {/* <img width="320" height="100%" src={this.state.url} alt=""/> */}
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
        </form>
      </Container>
    )
  }
}

PublicationForm.defaultProps = {
  title : "Nuevo",
  description : "",
  createdAt: "2019-06-12",
  updatedAt: "2019-06-12",
  user: {
      id:112
  }
}

export default (PublicationForm);