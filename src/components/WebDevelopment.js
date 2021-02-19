import React from "react";
import "./fonts.css";
import pixaviewer from "../assets/Pixaviewer.png";
import ecommerce from "../assets/frontend_demo.png";
import weather from "../assets/weather.png";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "500px",
    fontFamily: "Arial",
  },
  root: {
    maxWidth: "90rem",
    [theme.breakpoints.down("md")]: {
      width: "30rem",
      height: "17rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "310px",
    },
  },
  media: {
    width: "60rem",
    height: "30rem",
    [theme.breakpoints.down("md")]: {
      width: "30rem",
      height: "12rem",
    },
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
  title: {
    fontSize: "60px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  weaTitle: {
    fontSize: "45px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
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
          <Grid container justify="center">
            <Grid item style={{ padding: "15px" }}>
              <a
                href="https://xenodochial-mestorf-66658d.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Card className={classes.root} boxShadow={3}>
                  <CardActionArea>
                    <div
                      style={{
                        position: "absolute",
                        padding: "10px",
                        paddingLeft: "40px",
                      }}
                    >
                      <h1
                        className={classes.title}
                        style={{
                          fontFamily: "Libre Baskerville",
                        }}
                      >
                        Ecommerce Demo
                      </h1>
                    </div>
                    <CardMedia className={classes.media} image={ecommerce} />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A web application that allows purchases of with real
                        time ecommerce. Using Chec.io and Stripe API we are able
                        to process payments.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Grid>
            <Grid item style={{ padding: "15px" }}>
              <a
                href="http://www.pixaviewer.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Card className={classes.root} boxShadow={3}>
                  <CardActionArea>
                    <div
                      style={{
                        position: "absolute",
                        padding: "10px",
                        paddingLeft: "40px",
                      }}
                    >
                      <h1
                        className={classes.title}
                        style={{
                          fontFamily: "Libre Baskerville",
                        }}
                      >
                        PixaViewer.com
                      </h1>
                    </div>
                    <CardMedia className={classes.media} image={pixaviewer} />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A web application that allows you to search for pictures
                        from <strong> Pixabay.com</strong>. This application is
                        build using
                        <strong> React.js</strong>, utilizing a REST API.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Grid>
            <Grid item style={{ padding: "15px" }}>
              <a
                href="http://www.findmycurrentweather.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Card className={classes.root} boxShadow={3}>
                  <CardActionArea>
                    <div
                      style={{
                        position: "absolute",
                        padding: "10px",
                        paddingLeft: "40px",
                      }}
                    >
                      <h1
                        className={classes.weaTitle}
                        style={{
                          fontFamily: "Libre Baskerville",
                        }}
                      >
                        FindMyCurrentWeather.com
                      </h1>
                    </div>
                    <CardMedia className={classes.media} image={weather} />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A web application that allows you to search for weather.
                        Query must be exact. An auto complete function is also
                        used to fix UI.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This application is build using
                        <strong> React.js</strong>, utilizing a REST APIfetching
                        from OpenWeatherMap API.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
