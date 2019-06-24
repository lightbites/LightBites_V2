import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: '1em',
    textAlign: 'center'
  }
});

export default function ProfileCard() {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <List>
          <ListItem>
            Name
          </ListItem>
          <ListItem>
            Email
          </ListItem>
          <ListItem>
            City, State Zip
          </ListItem>
        </List>
      </Paper>
    </Fragment>
  )
};