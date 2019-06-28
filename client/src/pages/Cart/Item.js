import React, {Fragment, useState, useEffect}  from "react";
//import useFetch from './Hooks'
//Material Imports
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  itemRow: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    width: '500px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    width: '100px'
  }
}))

//TODO: Using Meal_ID, grab image from Stock Table/Model in Db
export default function Item(props) {
    const [item, setItem] = useState();
    // fetch(`https://lightbites.herokuapp.com/api/stock/meal_id/${props.mealid}`)
    // .then(response => response.json())
    // .then(data => setItem(data[0]))
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://lightbites.herokuapp.com/api/stock/meal_id/${props.mealid}`);
            const data = await response.json();
            setItem(data[0]);
        }
        fetchData();
    }, [])
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container justify={'center'} space={3}>
                <Paper className={classes.itemRow}>
                <Grid item xs={2}>
                    Meal ID: {props.mealid}
                </Grid>
                <Grid item xs={5}>
                    {item ? item.title1 : 'Loading Information'} <br />
                    {item ? <img className={classes.image} src={item.imageURL} /> : 'Loading Image'}
                </Grid>
                <Grid item xs={2}>
                    {props.quantity ? `Quantity: ${props.quantity}` : ''} <br />
                    {props.price}
                </Grid>
                </Paper>
            </Grid>
        </Fragment>
    )
}