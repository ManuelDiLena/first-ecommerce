import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import accounting from 'accounting';
import { Button } from '@material-ui/core';
import { getCartTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const classes = useStyles();
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total Items: {cart?.length}</h5>
      <h5>{accounting.formatMoney(getCartTotal(cart))}</h5>
      <Link to={`/checkout`}>
        <Button className={classes.btn} variant='contained'>
          Check Out
        </Button>
      </Link>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25vh',
  },
  btn: {
    backgroundColor: '#7BC74D',
    color: '#222831',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#598f38',
    }
  }
}));

export default CartSummary;