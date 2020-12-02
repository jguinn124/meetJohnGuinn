import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleLineChart from "../components/SimpleLineChart";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./fonts.css";

//images
import webDesign from "../assets/web-design-temp.png";
import facebookLogo from "../assets/Facebook-Logo.jpeg";
import video from "../assets/video.mp4";

//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "500px",
    fontFamily: "Arial",
  },
  root: {
    maxWidth: "30rem",
  },
  media: {
    height: "20rem",
  },
  group: {
    padding: "80px",
  },
  control: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
    },
  },
  call: {
    fontSize: "80px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid container justify="center">
        <Grid item>
          <Grid container justify="center" direction="row">
            <Grid container justify="center">
              <Grid item>
                <div
                  style={{
                    position: "absolute",
                    paddingLeft: "8rem",
                    paddingTop: "8rem",
                  }}
                >
                  <div
                    className={classes.call}
                    style={{
                      fontFamily: "Libre Baskerville",
                      padding: "20px",
                      backgroundColor: "white",
                      color: "#0E0E52",
                    }}
                  >
                    Grow Your Business With Us
                  </div>
                </div>
                <ReactPlayer
                  className="react-player"
                  url={video}
                  width="100%"
                  height="100%"
                  playing="true"
                  loop="true"
                  muted
                />
              </Grid>
            </Grid>
            <Grid item className={classes.control}>
              <div>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={webDesign}
                      title="Contemplative Reptile"
                      component={Link}
                      to="/webdevelopment"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        We Can Build a Beautiful Website for Your Business!
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        We are able to build a website exactly tailored to your
                        business. Give us a call to get a quote.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to="/webdevelopment"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item className={classes.control}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={facebookLogo}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Let us Help you build your Brand and reach a New audience!
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Our team of Online Advertising Experts is able to help you
                      reach consumers in many ways to grow your sales.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.group}
            direction="row"
            justify="center"
          >
            <Grid item className={classes.control}>
              <h3 className={classes.content}>
                More Consumers are Online and Social Media is Bigger than ever!
              </h3>
              <p className={classes.content}>
                Today around 7 in 10 Americans use social media to connect with
                one another, engage with news content, share information and
                entertain themselves. Explore the patterns and trends shaping
                the social media landscape over the past decade in the chart
                shown.
              </p>
              <p className={classes.content}>
                With the help of our team we can help you connect this new
                market to your products.
              </p>
              <i>According to Pew Research Center</i>
            </Grid>
            <Grid item>
              <SimpleLineChart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
