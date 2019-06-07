import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'  
// import Login from './Login';
import AppNav from './components/AppNav'
// import App1 from './components';
// // import SimpleTabs from './components/Tabs'
// import Form from './components/pages/protected/Form'
// import Textfields from './components/pages/protected/Textfields'
// import CustomizedSnackbars from './components/pages/protected/Snackbar';
// import MultiSelect from './components/pages/protected/MultiSelect';
// import FloatingActionButtons from './components/pages/protected/FloatingActionButtons';
// import Prueba from './Prueba';
// import MenuListComposition from './components/MenuListComposition';
// import Formulario from './components/pages/protected/Datos';
// import PublicationForm from './components/pages/protected/PublicationForm';
// import MostrarForm from './components/pages/protected/MostrarForm';
// import Imagen from './components/pages/Imagen';
// import UploadFiles from './components/pages/UploadFiles';
// import Resources from './components/Resources';

// import RecipeReviewCard from './components/pages/protected/EjemploCard';
// import CardData from './components/pages/protected/CardData';
// import CircularIntegration from './components/Dinamics/CircularIntegration';
// import DynamicCSS from './components/Dinamics/DynamicCSS';


// import MaterialUIPickers from './components/pages/protected/MaterialUIPickers';
// import Publication from './components/pages/protected/Publication';
// import PublicationsList from './components/pages/protected/PublicationsList';

class App extends Component {
  render() {
    return (
      <div className="App">

      <AppNav/>

      {/* <CardData/> */}

      {/* <MaterialUIPickers/> */}


      {/* <CircularIntegration/> */}
      {/* <DynamicCSS/> */}

      {/* Probando Json anidado para resources */}
      {/* <Resources/> */}


      {/* Subiendo imagen */}
      {/* <Imagen/> */}
      {/* <UploadFiles/> */}

      {/* Formulario agregar */}
      {/* <MostrarForm/> */}

      {/* <Formulario/> */}

      {/* Perfil */}
      {/* <MenuListComposition/> */}

      {/* <App1/> */}

      {/* Verision de Prueba */}

      {/* <Prueba/> */}

      {/* <PublicationsList/> */}
      {/* <Publication/> */}

      {/* <MultiSelect/> */}

      {/* Formulario */}
      {/* <Form/> */}

      {/* BotonesFlat */}
      {/* <FloatingActionButtons/> */}

      {/* <Textfields/> */}
      {/* <CustomizedSnackbars/> */}

      {/* <SimpleTabs/> */}
       
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          {/* <Login/> */}
          {/* <Button variant="contained" className={this.props.classes.button}>
            Learn React
          </Button> */}
      </div>
    );
  }
}

export default withStyles({
  button:{
    backgroundColor:'red'
  }
}) (App);
