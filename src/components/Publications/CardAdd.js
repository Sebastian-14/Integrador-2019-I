import React from 'react'
import axios from 'axios'

// Firebase
import firebase from 'firebase'

//Json Anidados
import update from 'immutability-helper';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles'
// Icon Add
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
// import { red } from '@material-ui/core/colors';
// import Icon from '@material-ui/core/Icon';

// import styled from 'styled-components'


// const Container = styled.div`
//     /* display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     flex-direction: row;
//     max-width: "500px"; */
//     min-width: "500px";

//   `

class CardAdd extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name: '',
      open: false,
      r:[],
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
    // this.handleName = this.handleName.bind(this);

    // this.handlePath = this.handlePath.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    this.hanldeOpen = this.hanldeOpen.bind(this)
    this.hanldeClose = this.hanldeClose.bind(this)
    this.cambio = this.cambio.bind(this)

  }

  hanldeOpen(){
    this.setState({
      open: true
    })
  }

  hanldeClose(){
    this.setState({
      open: false
    })
  }

  cambio(){
    this.setState(state => ({
        open:
          state.open === false
            ? true
            : false
      }))
  }

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

  // *** START ***
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

  // handleName(e){
  //   const { value } = e.target;

  //   const datos = this.state

  //   const newData = update(datos, {
  //       resources:[{
  //         name:{
  //           $set:
  //             value
  //         }
  //       }]
  //     }
  //   )
  //   this.setState(newData)
  // }

  // handlePath(e){
  //   const { value } = e.target;

  //   const datos = this.state

  //   const newData = update(datos, {
  //       resources:[{
  //         path:{
  //           $set:
  //             value
  //         }
  //       }]
  //     }
  //   )
  //   this.setState(newData)
  // }

  guardar(e){
      e.preventDefault();
      let cod = this.state.id;
      let datos = {
        title : this.state.title,
        description : this.state.description,
        createdAt : (this.state.createdAt) ? this.state.createdAt : CardAdd.defaultProps.createdAt,
        updatedAt : (this.state.updatedAt) ? this.state.updatedAt : CardAdd.defaultProps.updatedAt,
        resources : [
          {
            path: this.state.resources[0].path,
            name: this.state.resources[0].name
          }
        ],
        user : {
          id: (this.state.user.id) ? this.user.id : CardAdd.defaultProps.user.id
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
      <div>

        <IconButton onClick={this.cambio} color="primary" aria-label="Add">
          {/* <Fab color="primary" aria-label="Add"> */}
            <AddIcon />
          {/* </Fab> */}
          {/* Guardar */}
        </IconButton>

        <div>
          <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
              <form onSubmit={this.guardar}>

                <DialogContent>
                  <DialogTitle id="form-dialog-title">
                    Nuevo Post
                  </DialogTitle>
                  <DialogContentText>
                    {/* Comparte el conocimiento con los demás para que nasndnakdaksdmaksdmkm */}
                  </DialogContentText>

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
                    {/* Icono de carga de archivos */}
                    <CloudUploadIcon/>
                  </Button>
                  <br/>
                  <br/>
                  {/* <img width="320" height="100%" src={this.state.url} alt=""/> */}

              </DialogContent>

              <DialogActions>
                {/* <Button onClick={this.cambio} variant="contained" color="primary">
                  Publicar
                </Button> */}
                <Button type="submit" variant="contained" color="primary" onClick={this.cambio}>
                    Guardar
                </Button>
                <Button onClick={this.cambio} variant="contained" color="secondary">
                  x
                </Button>
              </DialogActions>

            </form>
          </Dialog>
        </div>
      </div>
    )
  }

}

CardAdd.defaultProps = {
  title : "Nuevo",
  description : "",
  createdAt: new Date(),
  updatedAt: new Date().toISOString().slice(0,10),
  user: {
      id:22
  }
}

export default withStyles({
  fab: {
    margin: (1),
  },
  extendedIcon: {
    marginRight: (1),
  }
}) (CardAdd);