import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Form from './pages/protected/Form';
// import Card from './pages/protected/Card';

// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';

import axios from 'axios'

import './Tabs.css'
// import CardList from './pages/CardList';
// import Imagen from './pages/Imagen';
// import UploadFiles from './pages/UploadFiles';
// import MostrarForm from './pages/protected/MostrarForm';
// import SearchIcon from '@material-ui/icons/Search';
import PublicationForm from './pages/protected/PublicationForm';
import CardData from './pages/CardData';
import CardSearch from './pages/CardSearch';




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
});


class SimpleTabs extends React.Component {

  
  // state = {
  //   value: 0,
    
  // };

  constructor(props){
    super(props)
    this.state={
        pubs : [],
        filter: {
          title: '',
          search: '',
      }
    }
    this.handleOnFilter = this.handleOnFilter.bind(this)
    this.handleOnSearch = this.handleOnSearch.bind(this)
  }
  
  componentWillMount() {
    axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      this.setState({ pubs: res.data})
      console.log(res)
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )
    this.setState({
      filter: newFilter
    })
    // console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
    // return data.filter(q => ( regex.test(q.name) || regex.test(q.teacher) || regex.test(q.categories) ))
    return data.filter(q=>(regex.test(q.title)))
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="content">
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Publicaciones" />
              <Tab label="Nueva Publicacion" />
              <Tab label="Mis Publicaciones" />
            </Tabs>
          </AppBar>
          {value === 0 &&
            <TabContainer style={{display:"inline"}}>

              {/* Componente para busqueda */}
              <CardSearch onSearch={this.handleOnSearch} />

              {/* Componente para mostrar en Cards la data */}
              <CardData data={this.handleOnFilter(this.state.filter, this.state.pubs)} />
              
            </TabContainer>
          }

          {value === 1 &&
            <TabContainer>
              
              {/* <Form/> */}
              {/* <MostrarForm/> */}
              <PublicationForm/>
              {/* <Imagen/> */}
              {/* <UploadFiles/> */}
              
            </TabContainer>}

          {value === 2 && <TabContainer>Item 3</TabContainer>}
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
