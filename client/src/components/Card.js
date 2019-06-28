import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FontAwesome from "../components/addToCart";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: "280px",
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#f50057"
  },
  price: {
    fontSize: "1.2rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
  }
}));

export default function MealCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const letSlice = title => title.slice(0, 1);

  const click = () => {
    console.log("click");
    console.log("otherclick");
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {letSlice(props.title)}
          </Avatar>
        }
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Typography className={classes.price} component="p">
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="Share"> */}
        {/* <ShareIcon /> */}
        {/* </IconButton> */}

        <div onClick={click}
        className={classes.addToCart}>
          <FontAwesome 
          id={props.}
          />
        </div>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Main Ingredients</Typography>
          <List>
            <ListItem>
              <ListItemText primary={props.line11} />
            </ListItem>
            <ListItem>
              <ListItemText primary={props.line12} />
            </ListItem>
            <ListItem>
              <ListItemText primary={props.line13} />
            </ListItem>
            <ListItem>
              <ListItemText primary={props.line14} />
            </ListItem>
            <ListItem>
              <ListItemText primary={props.line15} />
            </ListItem>
            <ListItem>
              <ListItemText primary={props.line16} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary={props.cal} />
              <ListItemText primary={props.protein} />
              <ListItemText primary={props.carbs} />
              <ListItemText primary={props.fat} />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
