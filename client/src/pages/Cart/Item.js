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

export default function Item() {
    const classes = useStyles();
    return (
        <Fragment>
            <Paper className={classes.paper}>
                <Grid container space={3}>
                    <Grid item xs={3}>
                        Col1: Image/Meal ID
                    </Grid>
                    <Grid item xs={6}>
                        Col2: Name, Description, etc.
                    </Grid>
                    <Grid item xs={3}>
                        Quantity <br />
                        Price
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}