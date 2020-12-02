import React from "react";
import "./fonts.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
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
          <Grid container justify="center">
            <Grid
              item
              style={{
                padding: "80px",
                paddingBottom: "600px",
              }}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    While Under Construction Contact By Email
                  </Typography>
                  <Typography variant="h5" component="h2">
                    jguinn124@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
