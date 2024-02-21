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

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
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
            {accounting.formatMoney(50)}
          </Typography>
        }
        title='MacBook Pro'
        subheader='Apple'
      />
      <CardMedia
        className={classes.media}
        image='https://www.hp.com/wcsstore/hpusstore/Treatment/mdps/Q3FY22_omen17_LT/hero_omen17_3.png'
        title='MacBook Pro'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi veritatis voluptate, iste voluptatem atque iure, repellendus voluptatibus asperiores, voluptates molestias vel non nemo optio. Maxime in quia ea incidunt est?.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart' className={classes.btns}>
          <AddShoppingCartRoundedIcon />
        </IconButton>
        <IconButton aria-label='Add to Favorites' className={classes.btns}>
          <FavoriteBorderRoundedIcon />
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
  }
}));