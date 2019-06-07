// import React from 'react'
import React from 'react';

// Style-components
import styled from 'styled-components'

// Material-UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

//Iconos
// import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GradeIcon from '@material-ui/icons/Grade'

// Estilos
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

//Images
import reactIcon from '../../../react.svg'
import { CardActions } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    minWidth: 600,
    padding: 10,
    margin: 20,
  },
  media: {
    height: '100%',
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

}));

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  `

// Funcion
export default function CardData(props) {

  const classes = useStyles();

  const data = props.data

  // const [color, setColor] = useState(red)

  // function Click() {

    
  // }

  // const [expanded, setExpanded] = React.useState(false);

  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }
  
  const Lista = data.map((d)=>

    <Card className={classes.card}>
      <CardHeader
        avatar={

          <div>
            <Avatar aria-label="Recipe" className={classes.avatar} src={d.user.image}>
              {/* {d.user.name.substr(0,1)} */}
            </Avatar>
            <p>{d.user.name}</p>
          </div>
          
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={d.title}
        //subheader={`By ${d.user.name}`}
        subheader={d.createdAt}
      />
      {/* <CardMedia
        className={classes.media}
        image={reactIcon}
        //title="Paella dish"
      /> */}
      <img  src={reactIcon} className="App-logo" alt="imagen"/>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {d.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          {/* <FavoriteIcon onClick={Click} /> */}
          {/* <FavoriteIcon/> */}
          <GradeIcon/>
        </IconButton>
        {/* <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
    </Card>

  )

  return (
    <Container>
      {Lista}
    </Container>
  )

}

// CardData.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
