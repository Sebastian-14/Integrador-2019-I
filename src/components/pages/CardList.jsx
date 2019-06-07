import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import react from '../../react.svg'
import styled from 'styled-components'
import axios from 'axios'
import {publicaciones} from '../../data/publicaciones.json'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`

const styles = theme => ({
  card: {
    maxWidth: 600,
    minWidth: 600,
    padding: 10,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  size:{
    fontSize: 25,
  }

});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  constructor(){
     super()
     this.state={
         publicaciones:[]
     }

     
  }

  removePublication(index){
   this.setState({
      publicaciones: this.state.publicaciones.filter((e,i)=>{
        return i!== index
      })
    })
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  // componentWillMount() {
  //   axios.get('http://shareinfotecsup.herokuapp.com/api/publication/')
  //   .then(res => {
  //     this.setState({ publicaciones: res.data })
  //     console.log(res)
  //   });
  // }

  render() {
    const { classes } = this.props;
    const publicaciones = this.state.publicaciones.map((publicacion, i)=>{
      return(
      <Card className={classes.card}>

        <CardHeader className={classes.size}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {/* {publicacion.user.name.substr(0,1)} */}
              {/* {publicacion.title} */}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={publicacion.title}
          subheader={publicacion.updatedAt}
        />

        <img src={react} className="App-logo"/>

        <CardContent>
          <Typography component="p" className={classes.size}>
            {publicacion.description}
          </Typography>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
      )
    })
    return (
      <div>
        <h1>Mostrando publicaciones</h1>
        <Container>
            {publicaciones}
        </Container>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
