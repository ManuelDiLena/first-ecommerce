import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import accounting from 'accounting';
import { Button } from '@material-ui/core';

const CartSummary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5>Total Items: 3</h5>
      <h5>{accounting.formatMoney(3000)}</h5>
      <Button className={classes.btn} variant='contained'>
        Check Out
      </Button>
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
  }
}));

export default CartSummary;