import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

export default function ProductGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))