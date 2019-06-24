import React, {Fragment}  from "react";

//Material Imports
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center'
  }
}))

//TODO: Using Meal_ID, grab image from Stock Table/Model in Db
export default function Item(props) {
    const classes = useStyles();
    return (
        <Fragment>
            <Paper className={classes.paper}>
                <Grid container space={3}>
                    <Grid item xs={3}>
                        Meal ID: {props.mealid}
                    </Grid>
                    <Grid item xs={6}>
                        {props.imageUrl ? (
                            <img src={props.imageurl} 
                            alt="test"
                        />
                        ) : "No Image Available"}
                    </Grid>
                    <Grid item xs={3}>
                        {props.quantity} <br />
                        {props.price}
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}