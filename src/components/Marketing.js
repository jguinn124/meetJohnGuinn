import React from "react";
import "./fonts.css";
import SimpleLineChart from "./SimpleLineChart";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "500px",
    fontFamily: "Arial",
  },
  root: {
    maxWidth: "70rem",
  },
  media: {
    width: "60rem",
    height: "30rem",
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
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" direction="column">
        <Grid
          container
          justify="center"
          direction="row"
          className={classes.group}
        >
          <Grid container justify="left">
            <Grid
              item
              style={{
                padding: "2rem",
                paddingBottom: "10px",
                paddingLeft: "10%",
              }}
            >
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "60px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                }}
              >
                Modern Digital Marketing
              </div>
            </Grid>
          </Grid>
          <Grid container justify="left">
            <Grid item style={{ paddingLeft: "15%" }}>
              <Card className={classes.root}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ color: "black", padding: "20px", fontSize: "15px" }}
                >
                  Big data has changed the game in today’s marketing and what
                  most people don't know is that we have access to it. Social
                  media has allowed billions of people to connect and find
                  common interests with people on the other side of the world.
                  This connection built also allows for anyone to find those
                  interests, and it allows them to show that person content that
                  is relevant to them. We now have access directly to your
                  target audience. You don't need to find ways to reach your
                  customers, you can go directly to them.
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ color: "black", padding: "20px", fontSize: "15px" }}
                >
                  Big data has made it possible to track patterns and trends of
                  human behavior. We want to allow small businesses to have
                  access to this network. Smartphones have exploded in the last
                  decade and marketing departments are still catching up. Today,
                  smartphones have overtaken personal computers as the primary
                  digital device for going online. This is why we have made it a
                  point to make sure all our products are mobile responsive.
                </Typography>
              </Card>
            </Grid>
            <Grid container justify="center" style={{ paddingTop: "20px" }}>
              <SimpleLineChart />
            </Grid>
            <Grid item style={{ paddingLeft: "15%", paddingTop: "20px" }}>
              <Card className={classes.root}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ color: "black", padding: "20px", fontSize: "15px" }}
                >
                  Today around 7 in 10 Americans use social media to connect
                  with one another, engage with news content, share information
                  and entertain themselves. Explore the patterns and trends
                  shaping the social media landscape over the past decade in the
                  chart shown. With the help of our team we can help you connect
                  this new market to your products.
                  <i> According to Pew Research Center</i>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
