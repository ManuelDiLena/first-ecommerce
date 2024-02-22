import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import accounting from 'accounting';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

export default function CartProduct({ product: {id, name, brand, image, price, description} }) {
  const classes = useStyles();
  const [{cart}, dispatch] = useStateValue();

  // Function to delete product from the cart
  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

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
        title={name}
        subheader={brand}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing className={classes.btnsActions}>
        <IconButton aria-label='Add to Favorites' className={classes.btns}>
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <IconButton 
          aria-label='Delete Product' 
          className={classes.btns}
          onClick={removeItem}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </CardActions>
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
  btnsActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  }
}));