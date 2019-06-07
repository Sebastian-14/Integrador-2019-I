import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import styled from 'styled-components'
import MultiSelect from './MultiSelect';
import CustomizedSnackbars from './Snackbar'
import FloatingActionButtons from './FloatingActionButtons';

import '../../../data/publicaciones.json'
import UploadFiles from '../UploadFiles';
// import MaterialUIPickers from './MaterialUIPickers';


const styles = theme => ({
  
});

const Space = styled.p`
  padding: 1px;
`

const MainContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: auto;
`

const Container = styled.div`
  max-width:350px;
  margin:10px;
`

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: { useNextVariants: true },
});

function Form(props) {
  const { classes } = props;

  return (    
    <div className={classes.root}>
      <MainContainer>
        <Container>
          <MuiThemeProvider theme={theme}>

            {/* <FloatingActionButtons/> */}
            <TextField
              className={classes.margin}
              fullWidth={true}
              label="Titulo"          
              id="mui-theme-provider-standard-input"
            />
            <Space/>

            {/* <MaterialUIPickers/> */}


            {/* <TextField
              className={classes.margin}
              fullWidth={true}
              label="Tema"
              id="mui-theme-provider-standard-input"
            /> */}
            <MultiSelect/>
            <Space/>

            <TextField
              className={classes.margin}
              fullWidth={true}
              label="Descripcion"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />

            <Space/>
            
            <UploadFiles/>

            <CustomizedSnackbars />

          </MuiThemeProvider>
        </Container>
      </MainContainer>
    </div>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
