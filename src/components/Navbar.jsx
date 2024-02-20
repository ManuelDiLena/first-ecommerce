import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Badge } from '@material-ui/core';
import logo from '../images/logo.png'

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton 
            edge='start' 
            className={classes.menuBtn} 
            color='inherit'
            aria-label='menu'>
              <img src={logo} alt='logo' className={classes.logo} />
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.btns}>
              <Button variant='outlined' className={classes.btnLog}>
                <strong>Sign In</strong>
              </Button>
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={2} color='secondary'>
                  <ShoppingCartRoundedIcon fontSize='large' className={classes.btnCart} />
                </Badge>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '6rem',
  },
  appBar: {
    backgroundColor: '#393E46',
    boxShadow: 'none',
    color: '#EEEEEE',
  },
  grow: {
    flexGrow: 1,
  },
  btns: {
    marginLeft: theme.spacing(2),
  },
  btnLog: {
    color: '#EEEEEE',
    borderColor: '#EEEEEE',
    marginRight: theme.spacing(3),
  },
  btnCart: {
    color: '#7BC74D',
    '&:hover': {
      backgroundColor: '#222831',
    }
  },
  logo: {
    height: '60px',
    marginRight: '10px',
    objectFit: 'contain',
    cursor: 'pointer'
  }
}));

