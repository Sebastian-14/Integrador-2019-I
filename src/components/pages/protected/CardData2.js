import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class CardData2 extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name: '',
      title: '',
      open: false
    }

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

  render(){
    return(
      <div>

        <Button onClick={this.cambio}>
          Cambiar el estado
        </Button>

        <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
          <form>

            <DialogContent>
              <DialogTitle id="form-dialog-title">
                Nuevo Post
              </DialogTitle>
              <DialogContentText>
                Nuevo Post
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="desciption"
                label="Descripcion"
                type="text"
                fullWidth
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={this.cambio} variant="contained" color="primary">
                Publicar
              </Button>
              <Button onClick={this.cambio} variant="contained" color="secondary">
                Cancelar
              </Button>
            </DialogActions>

          </form>
        </Dialog>
      </div>
    )
  }

}