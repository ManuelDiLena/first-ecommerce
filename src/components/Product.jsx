import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import accounting from 'accounting';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

export default function Product({ product: {id, name, brand, image, price, description} }) {
  const classes = useStyles();
  const [{cart}, dispatch] = useStateValue();
  const [expanded, setExpanded] = useState(false);

  // Function to expand the card and show the product info
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // Function to add product to cart
  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      item: {
        id,
        name,
        brand,
        image,
        price,
        description,
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title='MacBook Pro'
        subheader='Apple'
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing>
        <IconButton 
          aria-label='Add to Cart' 
          className={classes.btns}
          onClick={addToCart}
        >
          <AddShoppingCartRoundedIcon />
        </IconButton>
        <IconButton aria-label='Add to Favorites' className={classes.btns}>
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='Show more'
        >
          <ExpandMoreRoundedIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '60%',
  },
  btns: {
    color: '#7BC74D',
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
  }
}));