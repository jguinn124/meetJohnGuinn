import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleLineChart from "../components/SimpleLineChart";
import "./fonts.css";

//images
import image from "../assets/undraw_Success_factors_re_ce93.svg";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "500px",
    fontFamily: "Arial",
  },
  maincontent: {
    maxWidth: "700px",
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
            <Grid container justify="center" style={{ paddingTop: "80px" }}>
              <Grid item style={{ paddingTop: "35px" }}>
                <Typography variant="h2">Welcome</Typography>
              </Grid>
              <Grid item style={{ paddingLeft: "40px" }}>
                <img src={image} alt="Welcome" width="200" height="200" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingTop: "80px" }}>
            <Grid item style={{ paddingTop: "35px" }}>
              <Typography variant="h5">Summary</Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingTop: "20px" }}>
            <Grid item className={classes.maincontent}>
              <Typography variant="p5">
                My name is John Guinn. I am a budding web developer and here you
                can take a look at some of my projects. I am a proponent of
                simplistic design and I have been building web applications ever
                since I was in middle school, I am someone that sees web
                development as a means for business productivitiy and
                accessibility.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingTop: "20px" }}>
            <Grid item className={classes.maincontent}>
              <Typography variant="p5">
                Here you will find projects I like to work on in my free time.
                If you are looking for my resume it is under navigation. My
                resume will have more information on each project.
              </Typography>
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
