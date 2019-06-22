import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
});

//NOTE: This is the old version of the component
function ProfileCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography><br />
        <Typography className={classes.pos} color="textSecondary">
          Calories This Week: {props.calories}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {"\"a benevolent smile\""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

class ProfileTest extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        fname: '',
        lname: '',
        email: '',
        address1: '',
        city: '',
        state: ''
      }
    };
    this.grabInformation = this.grabInformation.bind(this);
  }
  grabInformation (attr, val) {
    fetch(`/api/customers/${attr}/${val}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
      let u = json[0];
      this.setState({
        userInfo: {
          fname: u.firstname,
          lname: u.lastname,
          address1: u.address1,
          city: u.city,
          state: u.state
        }
      })
      console.log(this.state);
    });
  }
  render() {
    let profile = this.state.userInfo;
    return (
      <div>
        <ul>
          <li>
            {profile.lname}, {profile.fname}
          </li>
          <li>
            {profile.address1}
          </li>
          <li>
            {profile.city}, {profile.state}
          </li>
        </ul>
        <Button onClick={() => this.grabInformation('', '')}>
          Refresh Your Profile
        </Button>
      </div>
    )
  }
}

export default ProfileTest

//TODO: DisplayProfile - GET from db
//From Login -> email, <value>