import React from "react";
import "./fonts.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
                paddingBottom: "700px",
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
                Resume
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "40px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "50px",
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "30px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "20px",
                }}
              >
                Bachelor of Science in Computer Science
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "30px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "20px",
                  color: "#800000",
                }}
              >
                Missouri State University 2019
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "40px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "50px",
                }}
              >
                Projects
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "40px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "20px",
                }}
              >
                Functional Ecommerce Application
              </div>
              <div
                style={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "#0E0E52",
                  paddingTop: "20px",
                }}
              >
                A web application that allows purchases of with real time
                ecommerce. Using Chec.io and Stripe API we are able to process
                payments.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
