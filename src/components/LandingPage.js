import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    maxWidth: "800px",
    fontFamily: "Arial",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
    },
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
      <Grid container justify="center" style={{ paddingBottom: "200px" }}>
        <Grid item>
          <Grid container justify="center" direction="row">
            <Grid container justify="center" style={{ paddingTop: "80px" }}>
              <Grid item style={{ paddingTop: "70px" }}>
                <Typography variant="h2">Welcome</Typography>
              </Grid>
              <Grid item style={{ paddingLeft: "80px" }}>
                <img src={image} alt="Welcome" width="300" height="300" />
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
        </Grid>
      </Grid>
    </Grid>
  );
}
