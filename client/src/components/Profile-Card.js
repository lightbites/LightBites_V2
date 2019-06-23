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
class ProfileTest extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        fname: "",
        lname: "",
        email: "",
        address1: "",
        city: "",
        state: ""
      }
    };
    this.grabInformation = this.grabInformation.bind(this);
  }
  grabInformation (attr, val) {
    fetch(`/api/customers/${attr}/${val}`, {
      method: "GET"
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
        });
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
        <Button onClick={() => this.grabInformation("firstname", "Anthony")}>
          Refresh Your Profile
        </Button>
      </div>
    );
  }
}

export default ProfileTest;

//TODO: DisplayProfile - GET from db
//From Login -> email, <value>