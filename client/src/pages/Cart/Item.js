import React, {Fragment}  from "react";

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
  }
}))

//TODO: Using Meal_ID, grab image from Stock Table/Model in Db
export default function Item(props) {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container justify={'center'} space={3}>
                <Paper className={classes.itemRow}>
                <Grid item xs={2}>
                    Meal ID: {props.mealid}
                </Grid>
                <Grid item xs={5}>
                    {props.imageUrl ? (
                        <img src={props.imageUrl} 
                        alt="test"
                    />
                    ) : "No Image Available"}
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