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
        image='https://cdn.vox-cdn.com/thumbor/fwxkgXqDQh3HC9gCe5iR1ZYzK7k=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24371431/236492_MacBook_Pro_16__2023__AKrales_0114.jpg'
        title='MacBook Pro'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi veritatis voluptate, iste voluptatem atque iure, repellendus voluptatibus asperiores, voluptates molestias vel non nemo optio. Maxime in quia ea incidunt est?.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCartRoundedIcon />
        </IconButton>
        <IconButton aria-label='Add to Favorites'>
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='Show more'
        >
          <ExpandMoreRoundedIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates id alias nulla eius eos. Dicta recusandae officia, enim ea quibusdam voluptatum illum, architecto saepe sit rem cupiditate tempora, eius ex!
          </Typography>
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
}));